
import { useState } from 'react';
import styles from '../form.module.scss';
import { Field } from '../form.types';


interface RadioProps extends Field {
    defaultValue?:boolean
}

export function RadioField({
  id,
  label,
  required,
  name,
  defaultValue = false,
  disabled = false,
}: RadioProps) {

  const [isChecked, setIsChecked] = useState<boolean>(defaultValue);

  const handleClick = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div
      className={styles['form-field']}
    >
      <label htmlFor={id} >
        <input
          name={name}
          aria-checked={isChecked}
          required={required}
          type="radio"
          id={id}
          disabled={disabled}
          checked={isChecked}
          onChange={handleClick}
          value={label}
        />
        {label}
      </label>
    </div>
  );
}
