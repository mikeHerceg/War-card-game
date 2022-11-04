import React from 'react';
import { useGame } from './game.hooks';
import styles from './game.module.scss';
import { Button } from '../buttons/button';
import { TypeTag } from '../atoms';
import { Tags } from '../../generic.types';
// interface GameProps {
//     // add prop types for components here
// }

export function Game({ ...props }) {

  const {
    players,
    gameReady,
    gameWinner,
    outCome,
    currentCards,
    cardsRemaining,
    render,
    dealCards,
  } = useGame();

  if (!gameReady) return null;
  if (gameWinner) {
    return (
      <TypeTag tag={Tags.h1} content={gameWinner} />
    );
  }
  return (
    <div {...props} data-testid="game" className={styles.game}>
      <TypeTag tag={Tags.p} content={`total cards ${players.playerOne.cards.length + players.playerTwo.cards.length}`} />
      <TypeTag tag={Tags.p} content={`"Rounds" ${render}`} />

      <TypeTag tag={Tags.h4} content={players.playerOne.name} />
      <TypeTag tag={Tags.p} content={`cards: ${players.playerOne.cards.length}`} />

      <TypeTag tag={Tags.h4} content={players.playerTwo.name} />
      <TypeTag tag={Tags.p} content={`cards: ${players.playerTwo.cards.length}`} />
      {cardsRemaining && (
        <TypeTag
          tag={Tags.p}
          content={`cards remaining: ${cardsRemaining}`}
        />
      )}
      {outCome && (
        <div>
          <TypeTag tag={Tags.p} content={outCome} />
        </div>
      )}
      <div>
        {currentCards?.map((card) => {
          if (!card) return null;
          return (
            <img src={card.image} alt={card.code} key={card.code}/>
          );
        })}
      </div>
      <Button onClick={dealCards} text="Deal" disabled={outCome === 'WAR'}/>
    </div>
  );
}
