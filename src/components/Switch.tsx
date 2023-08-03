import React, { ReactNode } from 'react';
import './Switch.css';
import { Ripple } from './Ripple';

export type SwitchProps = {
  /** Called when this button is clicked. */
  onClick: () => void;
  /** The type of button to display. */
  disabled?: boolean;
  /** Controls the checked state of this button. */
  checked?: boolean;
  /** CSS styles to be applied to the HTMLButtonElement. */
  style?: React.CSSProperties;

  checkedIcon?: ReactNode;
  uncheckedIcon?: ReactNode;
};

/**
 * https://m3.material.io/components/switches/overview
 */
export const Switch = ({
  onClick,
  disabled = false,
  checked = false,
  style,
  checkedIcon,
  uncheckedIcon,
  ...props
}: SwitchProps & React.InputHTMLAttributes<HTMLInputElement>) => {
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
