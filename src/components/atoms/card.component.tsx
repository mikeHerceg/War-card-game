import { PropsWithChildren,
} from 'react';
import styles from './atoms.module.scss';

export function Card({ children, ...props }:PropsWithChildren<Record<string, unknown>>) {
  return (
    <div {...props} className={styles.card}>
      {children}
    </div>
  );
}
