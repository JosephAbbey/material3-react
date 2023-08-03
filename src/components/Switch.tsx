import React, { ReactNode } from 'react';
import './Switch.css';
import { Ripple } from './Ripple';

export type SwitchProps = {
  /** Called when this button is clicked. */
  onClick: () => void;
  /** Controls the enabled state of this button. When true, this component will not respond to user input, and it will appear visually disabled and disabled to accessibility services. */
  disabled?: boolean;
  /** Controls the checked state of this button. */
  checked?: boolean;
  /** CSS styles to be applied to the HTMLButtonElement. */
  style?: React.CSSProperties;
  /** The content to display in the thumb when the switch is on. */
  checkedIcon?: ReactNode;
  /** The content to display in the thumb when the switch is off. */
  uncheckedIcon?: ReactNode;
};

/**
 * https://m3.material.io/components/switch/overview
 */
export const Switch = ({
  onClick,
  disabled = false,
  checked = false,
  style,
  checkedIcon,
  uncheckedIcon,
  ...props
}: SwitchProps &
  Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onClick'>) => {
  return (
    <div
      className={`Switch ${checked ? 'checked' : ''} ${
        disabled ? 'disabled' : ''
      }`}
      onClick={onClick}
      style={style}>
      <input type='checkbox' disabled={disabled} checked={checked} {...props} />
      <div className='Thumb'>
        {checkedIcon && <span className='CheckedIcon'>{checkedIcon}</span>}
        {uncheckedIcon && (
          <span className='UncheckedIcon'>{uncheckedIcon}</span>
        )}
        <Ripple disabled={disabled} />
      </div>
    </div>
  );
};
