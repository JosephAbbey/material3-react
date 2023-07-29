import React, { PropsWithChildren } from 'react';
import './IconButton.css';
import { Ripple } from './Ripple';

export type IconButtonProps = PropsWithChildren<{
  onClick: () => void;
  disabled?: boolean;
  filled?: boolean;
  style?: React.CSSProperties;
}>;

/**
 * Primary UI component for user interaction
 */
export const IconButton = ({
  onClick,
  disabled = false,
  filled = false,
  style,
  children,
}: IconButtonProps) => {
  return (
    <button
      className={`IconButton ${filled ? 'filled' : ''}`}
      type='button'
      onClick={onClick}
      disabled={disabled}
      style={style}>
      <Ripple disabled={disabled} />
      {children}
    </button>
  );
};
