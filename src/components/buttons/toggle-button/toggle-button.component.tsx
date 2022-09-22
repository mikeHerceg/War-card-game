import React from 'react';
import styles from './toggle-button.module.scss';
import { useToggleButton } from './toggle-button.hooks';

interface ToggleButtonProps {
    text:string,
    name:string,
    defaultValue?:boolean,
    onClick:()=>void
}

export function ToggleButton({
onClick,
  text,
  name,
  defaultValue = false,
  ...props
}:ToggleButtonProps) {

  const { isChecked, handleClick, id } = useToggleButton(defaultValue, text, name, onClick);

  return (
    <button type="button" {...props} className={styles['toggle-button']} role="switch" aria-checked={isChecked} onClick={handleClick} aria-labelledby={id} name={name}>
      <span className={styles['u-sr-only']}>On</span>
      <span className={styles['u-sr-only']}>Off</span>
      <span className={styles['toggle-btn-label']} id={id}>{text}</span>
    </button>
  );
}
