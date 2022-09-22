
import { Error } from '../../atoms';
import styles from '../form.module.scss';
import { Field } from '../form.types';



export function SelectField({
  id,
  label,
  error,
  hasError,
  name,
  required,
  options,
  disabled = false,
}: Field) {




  return (
    <div className={styles['form-field']} data-error={hasError}>

      <label htmlFor={id}>
        {label}
        {!required && <span> (optional)</span>}
      </label>

      <select
        name={name}
        required={required}
        id={id}
        disabled={disabled}
      >
        <option disabled selected>Please select an option</option>
        {options &&
            options.map(option => (
              <option key={option.value} value={option.value} selected={option.selected}>
                {option.label}
              </option>
            ))
        }
      </select>

      {hasError && <Error text={error}/> }
    </div>
  );
}
