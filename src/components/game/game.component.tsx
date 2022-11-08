import React from 'react';
import { useGame } from './game.hooks';
import styles from './game.module.scss';
import { Button } from '../buttons/button';
import { TypeTag } from '../atoms';
import { Tags } from '../../generic.types';
import { Player } from '../player';
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
      <TypeTag tag={Tags.p} content={`"Rounds" ${render}`} />
      <Button onClick={dealCards} text="Deal" disabled={outCome === 'WAR'}/>
      <div style={{ display: 'flex', gap: '10px' }}>
        <Player name={players.playerOne.name} cardsInHand={players.playerOne.cards.length}/>
        <Player name={players.playerTwo.name} cardsInHand={players.playerTwo.cards.length}/>
      </div>
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

    </div>
  );
}
