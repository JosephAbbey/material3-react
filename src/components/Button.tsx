import React, { PropsWithChildren } from 'react';
import './Button.css';
import { Ripple } from './Ripple';
import { cls } from '~/utils';

export const ButtonType = {
  Elevated: 'Elevated',
  Filled: 'Filled',
  Tonal: 'Tonal',
  Outlined: 'Outlined',
  Text: 'Text',
} as const;
export type ButtonType = valueof<typeof ButtonType>;

export type ButtonProps = PropsWithChildren<{
  /** Called when this button is clicked. */
  onClick: () => void;
  /** The type of button to display. */
  type?: ButtonType;
  /** Controls the enabled state of this button. When true, this component will not respond to user input, and it will appear visually disabled and disabled to accessibility services. */
  disabled?: boolean;
  /** CSS styles to be applied to the HTMLButtonElement. */
  style?: React.CSSProperties;
}>;

/**
 * https://m3.material.io/components/buttons/overview
 */
export const Button = ({
  onClick,
  type = ButtonType.Filled,
  disabled = false,
  style,
  children,
}: ButtonProps) => {
  return (
    <button
      className={cls`Button ${type} ${{ disabled }}`}
      type='button'
      onClick={onClick}
      disabled={disabled}
      style={style}>
      {children}
      <Ripple disabled={disabled} />
    </button>
  );
};
