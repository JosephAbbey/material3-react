import React, { PropsWithChildren } from 'react';
import './IconToggleButton.css';
import { Ripple } from './Ripple';

export type IconToggleButtonProps = PropsWithChildren<{
  onClick: () => void;
  disabled?: boolean;
  filled?: boolean;
  selected?: boolean;
  style?: React.CSSProperties;
}>;

/**
 * Primary UI component for user interaction
 */
export const IconToggleButton = ({
  onClick,
  disabled = false,
  filled = false,
  selected = false,
  style,
  children,
}: IconToggleButtonProps) => {
  return (
    <button
      className={`IconToggleButton ${filled ? 'filled' : ''} ${
        selected ? 'selected' : ''
      }`}
      type='button'
      onClick={onClick}
      disabled={disabled}
      style={style}>
      <Ripple disabled={disabled} />
      {children}
    </button>
  );
};
