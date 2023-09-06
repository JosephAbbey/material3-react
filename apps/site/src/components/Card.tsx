import { PropsWithChildren } from 'react';
import './Card.css';
import { Link } from 'react-router-dom';

export default function Card({
  banner,
  href,
  children,
}: PropsWithChildren<{ banner: string; href?: string }>) {
  return (
    <Link className='Card' to={href ?? '#'}>
      <div
        className='banner'
        style={{ backgroundImage: `url(${banner})` }}></div>
      <div className='wrapper'>{children}</div>
    </Link>
  );
}

export function CardList({ children }: PropsWithChildren) {
  return <div className='CardList'>{children}</div>;
}
