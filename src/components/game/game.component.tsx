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

  const { players, gameReady, outCome, cards, cardsRemaining, dealCards } = useGame();

  if (!gameReady) return null;

  return (
    <div {...props} data-testid="game" className={styles.game}>
      <TypeTag tag={Tags.h4} content={players.playerOne.name} />
      <TypeTag tag={Tags.p} content={`Wins: ${players.playerOne.wins}`} />

      <TypeTag tag={Tags.h4} content={players.playerTwo.name} />
      <TypeTag tag={Tags.p} content={`Wins: ${players.playerTwo.wins}`} />
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
        {cards?.map(card => (
          <img src={card.image} alt={card.code} key={card.code}/>
        ))}
      </div>
      <Button onClick={dealCards} text="Deal" />
    </div>
  );
}
