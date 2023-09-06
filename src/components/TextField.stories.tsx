import type { Meta, StoryObj } from '@storybook/react';
import { BADGE } from '@geometricpanda/storybook-addon-badges';

import { TextField, TextFieldType } from './TextField';
import React, { useState } from 'react';
import { Icon } from './Icon';

const meta = {
  title: 'Components/TextField',
  component: TextField,
  parameters: {
    layout: 'centered',
    badges: [BADGE.EXPERIMENTAL],
  },
  render: (args) => {
    const [value, setValue] = useState(args.value);
    return <TextField {...args} value={value} onChange={(v) => setValue(v)} />;
  },
  argTypes: {
    value: { control: 'none' },
    onChange: {
      action: 'changed',
      description: 'Called when this TextField is changed.',
    },
    type: {
      control: 'select',
      options: TextFieldType,
      description: 'The type of TextField to display.',
    },
    disabled: {
      control: 'boolean',
      description:
        'Controls the enabled state of this TextField. When true, this component will not respond to user input, and it will appear visually disabled and disabled to accessibility services.',
    },
    style: {
      description: 'CSS styles to be applied to the HTMLInputElement.',
    },
  },
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Filled: Story = {
  args: {
    value: '',
    prefix: '$',
    suffix: 'k',
    leadingIcon: <Icon icon='credit_card' />,
    trailingIcon: <Icon icon='clear' />,
    supportingText: (
      <>
        required<span style={{ color: 'var(--md-sys-color-error)' }}>*</span>
      </>
    ),
    label: (
      <>
        money<span style={{ color: 'var(--md-sys-color-error)' }}>*</span>
      </>
    ),
    placeholder: 'Enter something...',
    type: TextFieldType.Filled,
    disabled: false,
    error: false,
    readOnly: false,
  },
};
export const FilledDisabled: Story = {
  args: {
    value: '',
    prefix: '$',
    suffix: 'k',
    leadingIcon: <Icon icon='credit_card' />,
    trailingIcon: <Icon icon='clear' />,
    supportingText: (
      <>
        required<span style={{ color: 'var(--md-sys-color-error)' }}>*</span>
      </>
    ),
    label: (
      <>
        money<span style={{ color: 'var(--md-sys-color-error)' }}>*</span>
      </>
    ),
    placeholder: 'Enter something...',
    type: TextFieldType.Filled,
    disabled: true,
    error: false,
    readOnly: false,
  },
};
