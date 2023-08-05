import React from 'react';
import './HorizontalDivider.css';

/**
 * https://m3.material.io/components/divider/overview
 */
export const HorizontalDivider = (
  props: React.InputHTMLAttributes<HTMLHRElement>
) => {
  return <hr {...props} />;
};
