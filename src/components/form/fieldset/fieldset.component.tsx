import styles from '../form.module.scss';
import { Error } from '../../atoms';
import { FieldsetVariant } from '../form.types';

interface FieldSetProps {
    children?:JSX.Element[] | JSX.Element,
    variant?: FieldsetVariant,
    legendText:string,
    hasError?:boolean,
    error?:string
}

export function Fieldset({
  variant = FieldsetVariant.Default,
  legendText, children,
  hasError,
  error,
}:FieldSetProps) {
  return (
    <fieldset className={styles['fieldset-wrapper']} data-variant={variant} data-error={hasError}>
      <legend>{legendText}</legend>
      <div className={styles.options}>
        {children}
      </div>
      {hasError && <Error text={error}/>}
    </fieldset>
  );
}
