
import { useState } from 'react';
import styles from '../form.module.scss';
import { Field } from '../form.types';


interface CheckboxProps extends Field {
    defaultValue?:boolean
}

export function CheckboxField({
  id,
  label,
  name,
  required,
  defaultValue = false,
  disabled = false,
}: CheckboxProps) {

  const [isChecked, setIsChecked] = useState<boolean>(defaultValue);

  const handleClick = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div
      className={styles['form-field']}
    >
      <label htmlFor={id} aria-hidden="true">
        <input
          aria-checked={isChecked}
          required={required}
          type="checkbox"
          name={name}
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
