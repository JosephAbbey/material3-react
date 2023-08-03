import React, { PropsWithChildren } from 'react';
import './IconToggleButton.css';
import { Ripple } from './Ripple';
import { IconButtonType } from './IconButton';

export type IconToggleButtonProps = PropsWithChildren<{
  /** Called when this button is clicked. */
  onClick: () => void;
  /** Controls the enabled state of this button. When true, this component will not respond to user input, and it will appear visually disabled and disabled to accessibility services. */
  disabled?: boolean;
  /** The type of button to display. */
  type?: IconButtonType;
  /** Controls the selected state of this button. */
  selected?: boolean;
  /** CSS styles to be applied to the HTMLButtonElement. */
  style?: React.CSSProperties;
}>;

/**
 * https://m3.material.io/components/icon-buttons/overview
 */
export const IconToggleButton = ({
  onClick,
  disabled = false,
  type = IconButtonType.Standard,
  selected = false,
  style,
  children,
}: IconToggleButtonProps) => {
  return (
    <button
      className={`IconToggleButton ${type} ${selected ? 'selected' : ''}`}
      type='button'
      onClick={onClick}
      disabled={disabled}
      style={style}>
      <Ripple disabled={disabled} />
      {children}
    </button>
  );
};
