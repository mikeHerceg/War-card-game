

interface LinkProps {
    href:string,
    text:string,
    newTab?:boolean
}

export function Link({
  href,
  text,
  newTab = false,
}:LinkProps) {

  return (
    // logic is there for eslint warning but eslint doesn't see it since its split into two tags
    // eslint-disable-next-line
    <a
      href={href}
      title={`link to ${text}`}
      target={newTab ? '_blank' : '_self'}
      rel={newTab ? 'noreferrer noopenner' : ''}
    >
      {text}
    </a>
  );
}
