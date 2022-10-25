import { PropsWithChildren,
} from 'react';
import styles from './atoms.module.scss';

export function Card({ children, ...props }:PropsWithChildren<any>) {
  return (
    <div {...props} className={styles.card}>
      {children}
    </div>
  );
}
