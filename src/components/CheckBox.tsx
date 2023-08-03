import React from 'react';
import './CheckBox.css';
import { Ripple } from './Ripple';
import { Icon } from './Icon';

export const CheckBoxState = {
  Checked: 'checked',
  Unchecked: 'unchecked',
  Indeterminate: 'indeterminate',
} as const;
export type CheckBoxState = valueof<typeof CheckBoxState>;

export type CheckBoxProps = {
  /** Called when this checkbox is clicked. */
  onClick: () => void;
  /** The type of checkbox to display. */
  disabled?: boolean;
  /***/
  error?: boolean;
  /** Controls the checked state of this checkbox. */
  state?: CheckBoxState;
  /** CSS styles to be applied to the HTMLDivElement. */
  style?: React.CSSProperties;
};

/**
 * https://m3.material.io/components/checkboxes/overview
 */
export const CheckBox = ({
  onClick,
  disabled = false,
  error = false,
  state = CheckBoxState.Unchecked,
  style,
  ...props
}: CheckBoxProps & React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <div
      className={`CheckBox ${state} ${error ? 'error' : ''} ${
        disabled ? 'disabled' : ''
      }`}
      onClick={onClick}
      style={style}>
      <div className='Container'>
        {state == CheckBoxState.Checked && <Icon icon='check' />}
        {state == CheckBoxState.Indeterminate && <Icon icon='remove' />}
      </div>
      <input
        type='checkbox'
        disabled={disabled}
        checked={state == CheckBoxState.Checked}
        {...props}
      />
      <Ripple disabled={disabled} />
    </div>
  );
};
