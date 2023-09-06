import React, { ReactNode, useCallback } from 'react';
import './TextField.css';
import { Ripple } from './Ripple';

export const TextFieldType = {
  Filled: 'Filled',
  Outlined: 'Outlined',
} as const;
export type TextFieldType = valueof<typeof TextFieldType>;

export type TextFieldProps = {
  value: string;
  onChange: (value: string) => void;
  readOnly?: boolean;
  label?: ReactNode;
  placeholder?: ReactNode;
  leadingIcon?: ReactNode;
  trailingIcon?: ReactNode;
  prefix?: ReactNode;
  suffix?: ReactNode;
  supportingText?: ReactNode;
  error?: boolean;
  /** The type of TextField to display. */
  type?: TextFieldType;
  /** Controls the enabled state of this TextField. When true, this component will not respond to user input, and it will appear visually disabled and disabled to accessibility services. */
  disabled?: boolean;
  /** CSS styles to be applied to the HTMLTextFieldElement. */
  style?: React.CSSProperties;
};

/**
 * https://m3.material.io/components/TextFields/overview
 */
export const TextField = ({
  value,
  onChange,
  readOnly = false,
  label,
  placeholder,
  leadingIcon,
  trailingIcon,
  prefix,
  suffix,
  supportingText,
  error = false,
  type = TextFieldType.Filled,
  disabled = false,
  style,
}: TextFieldProps) => {
  const onChangeRaw = useCallback<React.ChangeEventHandler<HTMLInputElement>>(
    (e) => onChange && onChange(e.target.value),
    [onChange]
  );

  return (
    <label
      className={`TextField ${type} ${error ? 'error' : ''}`}
      style={style}>
      <div className='TextFieldContainer'>
        <div className='TextFieldLeadingIcon'>{leadingIcon}</div>
        <div className='TextFieldText'>
          <div className='TextFieldLabel'>{label}</div>
          <span className='TextFieldPrefix'>{prefix}</span>
          <div className='TextFieldInputText'>
            <div className='TextFieldPlaceholder'>{placeholder}</div>
            <input
              type='text'
              value={value}
              onChange={onChangeRaw}
              readOnly={readOnly}
              disabled={disabled}
            />
          </div>
          <span className='TextFieldSuffix'>{suffix}</span>
        </div>
        <div className='TextFieldTrailingIcon'>{trailingIcon}</div>
        <Ripple onlyHover disabled={disabled} />
      </div>
      <div className='TextFieldSupportingText'>{supportingText}</div>
    </label>
  );
};
