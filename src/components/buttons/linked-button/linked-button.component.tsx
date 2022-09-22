import { Button } from '../button';
import { Link } from '../../atoms';

interface LinkedButtonProps {
    href:string,
    text:string,
    newTab?:boolean,
    disabled?:boolean
}

export function LinkedButton({
  href,
  text,
  disabled = false,
  newTab = false,
}:LinkedButtonProps) {
  return (
    <Button disabled={disabled} >
      <Link href={href} newTab={newTab} text={text}/>
    </Button>
  );
}
