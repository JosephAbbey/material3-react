import React from 'react';
import './CheckBox.css';
import { Ripple } from './Ripple';
import { Icon } from './Icon';
import { cls } from '~/utils';

export const CheckboxState = {
  Selected: 'selected',
  Unselected: 'unselected',
  Indeterminate: 'indeterminate',
} as const;
export type CheckboxState = valueof<typeof CheckboxState>;

export type CheckboxProps = {
  /** Called when this checkbox is clicked. */
  onClick: () => void;
  /** Controls the enabled state of this checkbox. When true, this component will not respond to user input, and it will appear visually disabled and disabled to accessibility services. */
  disabled?: boolean;
  /** Whether to use the error color scheme. */
  error?: boolean;
  /** Controls the selected state of this checkbox. */
  state?: CheckboxState;
  /** CSS styles to be applied to the HTMLDivElement. */
  style?: React.CSSProperties;
};

/**
 * https://m3.material.io/components/checkbox/overview
 */
export const Checkbox = ({
  onClick,
  disabled = false,
  error = false,
  state = CheckboxState.Unselected,
  style,
  ...props
}: CheckboxProps &
  Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onClick'>) => {
  return (
    <div
      className={cls`Checkbox ${state} ${{ error, disabled }}`}
      onClick={onClick}
      style={style}>
      <div className='Container'>
        {state == CheckboxState.Selected && <Icon icon='check' />}
        {state == CheckboxState.Indeterminate && <Icon icon='remove' />}
      </div>
      <input
        type='checkbox'
        disabled={disabled}
        checked={state != CheckboxState.Unselected}
        {...props}
      />
      <Ripple disabled={disabled} />
    </div>
  );
};
