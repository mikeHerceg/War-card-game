
import { Error } from '../../atoms';
import styles from '../form.module.scss';
import { Field } from '../form.types';



interface InputProps extends Field {
    placeholder?:string,
    defaultValue?:string
}

export function InputField({
  id,
  type,
  label,
  error,
  hasError,
  name,
  required,
  placeholder,
  defaultValue,
  disabled = false,
}: InputProps) {
  return (
    <div className={styles['form-field']} data-error={hasError}>

      <label htmlFor={id}>
        {label}
        {!required && <span> (optional)</span>}
      </label>

      <input
        name={name}
        required={required}
        type={type}
        id={id}
        disabled={disabled}
        placeholder={placeholder}
        defaultValue={defaultValue}
      />

      {hasError && <Error text={error}/> }
    </div>
  );
}
