import React from 'react';
import './RadioButton.css';
import { Ripple } from './Ripple';
import { Icon } from './Icon';
import { cls } from '~/utils';

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
  /** Controls the selected state of this button. */
  selected?: boolean;
  /** CSS styles to be applied to the HTMLButtonElement. */
  style?: React.CSSProperties;
};

/**
 * https://m3.material.io/components/radio-button/overview
 */
export const RadioButton = ({
  onClick,
  disabled = false,
  selected = false,
  style,
  ...props
}: RadioButtonProps &
  Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onClick'>) => {
  return (
    <span
      className={cls`RadioButton ${{ selected, disabled }}`}
      onClick={onClick}
      style={style}>
      <input type='radio' disabled={disabled} checked={selected} {...props} />
      {selected ? (
        <Icon icon='radio_button_checked' />
      ) : (
        <Icon icon='radio_button_unchecked' />
      )}
      <Ripple disabled={disabled} />
    </span>
  );
};
