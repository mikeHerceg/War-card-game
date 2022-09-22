
import { Error } from '../../atoms';
import styles from '../form.module.scss';
import { Field } from '../form.types';

interface TextareaProps extends Field {
    placeholder?:string,
    defaultValue?:string
}

export function TextareaField({
  id,
  label,
  error,
  hasError,
  name,
  required,
  placeholder,
  defaultValue,
  disabled = false,
}: TextareaProps) {
  return (
    <div className={styles['form-field']} data-error={hasError}>

      <label htmlFor={id}>
        {label}
        {!required && <span> (optional)</span>}
      </label>

      <textarea
        name={name}
        required={required}
        id={id}
        disabled={disabled}
        placeholder={placeholder}
        defaultValue={defaultValue}
      />

      {hasError && <Error text={error}/> }
    </div>
  );
}
