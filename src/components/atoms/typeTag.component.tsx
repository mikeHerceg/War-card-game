import { Tags } from '../../generic.types';

interface TypeTagProps {
    tag: Tags
    content: string | JSX.Element
}
export function TypeTag({
  tag,
  content,
}:TypeTagProps) {
  switch (tag) {
    case Tags.h1:
      return (<h1>{content}</h1>);
    case Tags.h2:
      return (<h2>{content}</h2>);
    case Tags.h3:
      return (<h3>{content}</h3>);
    case Tags.h4:
      return (<h4>{content}</h4>);
    case Tags.span:
      return (<span>{content}</span>);
    case Tags.strong:
      return (<strong>{content}</strong>);
    case Tags.b:
      return (<b>{content}</b>);
    default:
      return (<p>{content}</p>);
  }
}
