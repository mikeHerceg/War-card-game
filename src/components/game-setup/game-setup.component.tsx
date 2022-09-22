
import React, { useContext } from 'react';
import styles from './game-setup.module.scss';
import { GameContext } from '../../contexts/gameContext';
import { PlayerType } from '../../generic.types';
import { Card } from '../atoms';

interface GameSetupProps {
    // add prop types for components here
}

export function GameSetup({
  ...props
}:GameSetupProps) {
  const { gameReady, players } = useContext(GameContext).state;

  if (gameReady) return null;

  const names = players.map((player:PlayerType) =>
    (<p key={player.name}>{player.name}</p>),
  );

  return (
    <div {...props} data-testid="game-setup" className={styles['game-setup']}>
      <Card>
        {names}
      </Card>
    </div>
  );
}

