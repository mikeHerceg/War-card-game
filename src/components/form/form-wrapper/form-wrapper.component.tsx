import { Button } from '../../buttons/button';
import { Field } from '../form.types';
import { useFormWrapper } from './form-wrapper.hooks';


interface FormWrapperProps {
    fields: Field[],
    onSubmit:(values: Record<string, unknown>)=>void,
}

export function FormWrapper({ fields, onSubmit }:FormWrapperProps) {

  const { handleSubmit, handleFields } = useFormWrapper(fields, onSubmit);

  return (
    <form onSubmit={e => handleSubmit(e)} noValidate>
      {handleFields()}
      <Button type="submit" text="submit" />
    </form>
  );
}
