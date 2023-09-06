import { PropsWithChildren } from 'react';
import './Banner.css';

export default function Banner({
  banner,
  children,
}: PropsWithChildren<{ banner: string }>) {
  return (
    <div className='Banner' style={{ backgroundImage: `url(${banner})` }}>
      <div className='wrapper'>{children}</div>
    </div>
  );
}
