
import React from 'react';
import { useGame } from './game.hooks';
import styles from './game.module.scss';
import { Button } from '../buttons/button';
import { TypeTag } from '../atoms';
import { Tags } from '../../generic.types';
// interface GameProps {
//     // add prop types for components here
// }

export function Game({
  ...props
}) {
  const { state, players, gameReady, dealCards } = useGame();

  if (!gameReady) return null;

  return (
    <div {...props} data-testid="game" className={styles.game}>
      <TypeTag tag={Tags.p} content={players.playerOne.name}/>
      <TypeTag tag={Tags.p} content={players.playerTwo.name}/>
      {
      state.cardsRemaining &&
      <TypeTag tag={Tags.p} content={`cards remaining: ${state.cardsRemaining}`}/>
      }
      <div>
        {state.cards?.map(card => <img src={card.image} alt={card.code}/>)}
      </div>
      <Button onClick={dealCards} text="Deal"/>
    </div>
  );
}

