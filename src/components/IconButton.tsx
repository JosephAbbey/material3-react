import React, { PropsWithChildren } from 'react';
import './IconButton.css';
import { Ripple } from './Ripple';

export const IconButtonType = {
  Filled: 'Filled',
  Tonal: 'Tonal',
  Outlined: 'Outlined',
  Standard: 'Standard',
} as const;
export type IconButtonType = valueof<typeof IconButtonType>;

export type IconButtonProps = PropsWithChildren<{
  onClick: () => void;
  disabled?: boolean;
  type?: IconButtonType;
  style?: React.CSSProperties;
}>;

/**
 * Primary UI component for user interaction
 */
export const IconButton = ({
  onClick,
  disabled = false,
  type = IconButtonType.Standard,
  style,
  children,
}: IconButtonProps) => {
  return (
    <button
      className={`IconButton ${type}`}
      type='button'
      onClick={onClick}
      disabled={disabled}
      style={style}>
      <Ripple disabled={disabled} />
      {children}
    </button>
  );
};
