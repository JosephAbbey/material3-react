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
  /** Called when this button is clicked. */
  onClick: () => void;
  /** The type of button to display. */
  disabled?: boolean;
  /** Controls the enabled state of this button. When true, this component will not respond to user input, and it will appear visually disabled and disabled to accessibility services. */
  type?: IconButtonType;
  /** CSS styles to be applied to the HTMLButtonElement. */
  style?: React.CSSProperties;
}>;

/**
 * https://m3.material.io/components/icon-buttons/overview
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
