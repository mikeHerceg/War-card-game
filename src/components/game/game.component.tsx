
import React from 'react';
import { useGame } from './game.hooks';
import styles from './game.module.scss';

// interface GameProps {
//     // add prop types for components here
// }

export function Game({
  ...props
}) {
  const { players, gameReady, deckID } = useGame();

  if (!gameReady) return null;

  return (
    <div {...props} data-testid="game" className={styles.game}>
      {players.playerOne.name}<br/>
      {players.playerTwo.name}<br/>
      {deckID}
    </div>
  );
}

