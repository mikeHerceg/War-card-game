import { PropsWithChildren,
} from 'react';
import styles from './atoms.module.scss';

interface CardProps {

}

export function Card({ children, ...props }:PropsWithChildren<CardProps>) {
  return (
    <div {...props} className={styles.card}>
      {children}
    </div>
  );
}
