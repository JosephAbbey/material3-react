import { PropsWithChildren } from 'react';
import './TextCard.css';
import { Link } from 'react-router-dom';

export default function TextCard({
  href,
  children,
}: PropsWithChildren<{ href?: string }>) {
  return (
    <Link className='TextCard' to={href ?? '#'}>
      <div className='wrapper'>{children}</div>
    </Link>
  );
}

export function TextCardList({ children }: PropsWithChildren) {
  return <div className='TextCardList'>{children}</div>;
}
