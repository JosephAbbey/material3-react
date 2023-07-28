import React, { PropsWithChildren } from 'react';
import './Button.css';
import { Ripple } from './Ripple';

export type ButtonProps = PropsWithChildren<{
  onClick: () => void;
  enabled?: boolean;
  style?: React.CSSProperties;
}>;

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  onClick,
  enabled = true,
  style,
  children,
}: ButtonProps) => {
  return (
    <button
      className='Button'
      type='button'
      onClick={onClick}
      disabled={!enabled}
      style={style}>
      <Ripple enabled={enabled} />
      {children}
    </button>
  );
};
