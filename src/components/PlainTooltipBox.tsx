import React, { CSSProperties, PropsWithChildren, ReactNode } from 'react';
import './PlainTooltipBox.css';

export type PlainTooltipBoxProps = PropsWithChildren<{
  content: ReactNode;
  style?: CSSProperties;
}>;

/**
 * https://m3.material.io/components/switch/overview
 */
export const PlainTooltipBox = ({
  content,
  style,
  children,
}: PlainTooltipBoxProps) => {
  return (
    <div className='PlainTooltipBox'>
      <div className='PlainTooltip' style={style}>
        {content}
      </div>
      {children}
    </div>
  );
};
