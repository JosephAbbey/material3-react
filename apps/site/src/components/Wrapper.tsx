import './Wrapper.css';
import { PropsWithChildren } from 'react';

export default function Wrapper({ children }: PropsWithChildren) {
  return (
    <div className='Wrapper'>
      <div
        style={{
          backgroundColor: 'var(--md-sys-color-surface-container-high)',
        }}></div>
      <div className='main'>{children}</div>
    </div>
  );
}
