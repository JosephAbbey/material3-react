import React, { ReactNode } from 'react';
import './Switch.css';
import { Ripple } from './Ripple';
import { cls } from '~/utils';

export type SwitchProps = {
  /** Called when this button is clicked. */
  onClick: () => void;
  /** Controls the enabled state of this button. When true, this component will not respond to user input, and it will appear visually disabled and disabled to accessibility services. */
  disabled?: boolean;
  /** Controls the selected state of this button. */
  selected?: boolean;
  /** CSS styles to be applied to the HTMLButtonElement. */
  style?: React.CSSProperties;
  /** The content to display in the thumb when the switch is on. */
  selectedIcon?: ReactNode;
  /** The content to display in the thumb when the switch is off. */
  unselectedIcon?: ReactNode;
};

/**
 * https://m3.material.io/components/switch/overview
 */
export const Switch = ({
  onClick,
  disabled = false,
  selected = false,
  style,
  selectedIcon,
  unselectedIcon,
  ...props
}: SwitchProps &
  Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onClick'>) => {
  return (
    <div
      className={cls`Switch ${{ selected, disabled }}`}
      onClick={onClick}
      style={style}>
      <input
        type='checkbox'
        disabled={disabled}
        checked={selected}
        {...props}
      />
      <div className='SwitchThumb'>
        {selectedIcon && (
          <span className='SwitchSelectedIcon'>{selectedIcon}</span>
        )}
        {unselectedIcon && (
          <span className='SwitchUnselectedIcon'>{unselectedIcon}</span>
        )}
        <Ripple disabled={disabled} />
      </div>
    </div>
  );
};
