
import React from 'react';
import styles from './icon.module.scss';
import { useIcon } from './icon.hook';
import { IconProps } from './icon.types';


export function Icon({
  icon,
  ...props
}:IconProps) {

  const { svg } = useIcon(icon);
  if (!svg) return null;

  return (
    <div {...props} className={styles.icon}>
      {svg}
    </div>
  );


}

