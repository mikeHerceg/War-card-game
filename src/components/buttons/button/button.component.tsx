import React from 'react';
import styles from './button.module.scss';

interface ButtonProps {
    children?:JSX.Element,
    text?:string,
    disabled?:boolean,
    type?: 'submit' | 'button'
    onClick?:()=>void,
}

export function Button({
  text,
  children,
  disabled = false,
  onClick,
  type = 'button',
  ...props
}:ButtonProps) {

  return (
    <button {...props} type={type === 'button' ? 'button' : 'submit'} disabled={disabled} onClick={onClick} className={styles.button} >
      {text || children}
    </button>
  );
}
