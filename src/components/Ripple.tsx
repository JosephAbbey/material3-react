import React, { MouseEventHandler } from 'react';
import './Ripple.css';

/* https://m3.material.io/foundations/interaction/states/applying-states#c3690714-b741-492d-97b0-5fc1960e43e6 */

export type RippleProps = {
  disabled?: boolean;
  style?: React.CSSProperties;
};

export function Ripple({ disabled = false, style }: RippleProps) {
  const createRipple: MouseEventHandler<HTMLDivElement> = function (e) {
    if (disabled) return;

    const span = e.currentTarget;

    span.style.removeProperty('--ripple-content');

    const rect = span.getBoundingClientRect();

    const diameter = Math.max(rect.width, rect.height);
    const radius = diameter / 2;

    span.style.setProperty('--ripple-diameter', `${diameter}px`);
    span.style.setProperty(
      '--ripple-offset-left',
      `${e.clientX - rect.left - radius}px`
    );
    span.style.setProperty(
      '--ripple-offset-top',
      `${e.clientY - rect.top - radius}px`
    );
    span.style.setProperty('--ripple-content', "''");
  };

  return (
    <div
      className={`Ripple ${disabled ? 'disabled' : ''}`}
      style={style}
      onClick={createRipple}></div>
  );
}
