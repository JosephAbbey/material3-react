import React from 'react';
import './RadioButton.css';
import { Ripple } from './Ripple';
import { Icon } from './Icon';

export const RadioButtonType = {
  Elevated: 'Elevated',
  Filled: 'Filled',
  Tonal: 'Tonal',
  Outlined: 'Outlined',
  Text: 'Text',
} as const;
export type RadioButtonType = valueof<typeof RadioButtonType>;

export type RadioButtonProps = {
  /** Called when this button is clicked. */
  onClick: () => void;
  /** Controls the enabled state of this button. When true, this component will not respond to user input, and it will appear visually disabled and disabled to accessibility services. */
  disabled?: boolean;
  /** Controls the checked state of this button. */
  checked?: boolean;
  /** CSS styles to be applied to the HTMLButtonElement. */
  style?: React.CSSProperties;
};

/**
 * https://m3.material.io/components/radio-button/overview
 */
export const RadioButton = ({
  onClick,
  disabled = false,
  checked = false,
  style,
  ...props
}: RadioButtonProps &
  Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onClick'>) => {
  return (
    <span
      className={`RadioButton ${checked ? 'checked' : ''}`}
      onClick={onClick}
      style={style}>
      <input type='radio' disabled={disabled} checked={checked} {...props} />
      {checked ? (
        <Icon icon='radio_button_checked' />
      ) : (
        <Icon icon='radio_button_unchecked' />
      )}
      <Ripple disabled={disabled} />
    </span>
  );
};
