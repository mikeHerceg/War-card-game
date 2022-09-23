
import React from 'react';
import styles from './game.module.scss';

interface GameProps {
    // add prop types for components here
}

export function Game({
  ...props
}:GameProps) {


  return (
    <div {...props} data-testid="game" className={styles.game}>
      your generated component
    </div>
  );
}

