
import React from 'react';
import styles from './playing-card.module.scss';
import { Card } from '../../generic.types';
import cardback from '../../images/cardbackred.png';

interface PlayingCardProps {
    card:Card
}

export function PlayingCard({
  card,
  ...props
}:PlayingCardProps) {
  return (
    <div {...props} data-testid="card" className={styles['playing-card']}>
      <img src={cardback} alt="new"/>
      <img src={card.image} alt={card.code} key={card.code}/>
    </div>
  );
}
