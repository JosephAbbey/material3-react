import './Content.css';
import { PropsWithChildren } from 'react';

export default function Content({ children }: PropsWithChildren) {
  return <div className='Content'>{children}</div>;
}
