import React, { PropsWithChildren } from 'react';
import './IconButton.css';
import { Ripple } from './Ripple';

export type IconButtonProps = PropsWithChildren<{
  onClick: () => void;
  enabled?: boolean;
  style?: React.CSSProperties;
}>;

/**
 * Primary UI component for user interaction
 */
export const IconButton = ({
  onClick,
  enabled = true,
  style,
  children,
}: IconButtonProps) => {
  return (
    <button
      className='IconButton'
      type='button'
      onClick={onClick}
      disabled={!enabled}
      style={style}>
      <Ripple enabled={enabled} />
      {children}
    </button>
  );
};
