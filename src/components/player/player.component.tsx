
import React from 'react';
import styles from './player.module.scss';
import { TypeTag } from '../atoms';
import { Card, Tags } from '../../generic.types';

interface PlayerProps {
    name: string,
    cardsInHand: number,
    currentCard?: Card,
}

export function Player({
  name,
  cardsInHand,
  currentCard,
  ...props
}:PlayerProps) {
  return (
    <div {...props} data-testid="player" className={styles.player}>
      <TypeTag tag={Tags.h4} content={name} />
      <TypeTag tag={Tags.p} content={`cards: ${cardsInHand}`} />
    </div>
  );
}

