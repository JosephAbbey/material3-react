import type { Meta, StoryObj } from '@storybook/react';
import { BADGE } from '@geometricpanda/storybook-addon-badges';

import { CheckBox, CheckBoxState } from './CheckBox';
import React, { useState } from 'react';

const meta = {
  title: 'Components/CheckBox',
  component: CheckBox,
  parameters: {
    layout: 'centered',
    badges: [BADGE.BETA],
  },
  argTypes: {
    onClick: {
      action: 'clicked',
      description: 'Called when this icon button is clicked.',
    },
    disabled: {
      control: 'boolean',
      description:
        'Controls the enabled state of this icon button. When true, this component will not respond to user input, and it will appear visually disabled and disabled to accessibility services.',
    },
    error: {
      control: 'boolean',
      description: '',
    },
    state: {
      control: 'select',
      options: CheckBoxState,
      description: 'Controls the checked state of this button.',
    },
    style: {
      description: 'CSS styles to be applied to the HTMLButtonElement.',
    },
  },
} satisfies Meta<typeof CheckBox>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Standard: Story = {
  args: {
    disabled: false,
    error: false,
    state: CheckBoxState.Unchecked,
  },
};
export const Checked: Story = {
  args: {
    disabled: false,
    error: false,
    state: CheckBoxState.Checked,
  },
};
export const Indeterminate: Story = {
  args: {
    disabled: false,
    error: false,
    state: CheckBoxState.Indeterminate,
  },
};

export const Error: Story = {
  args: {
    disabled: false,
    error: true,
    state: CheckBoxState.Unchecked,
  },
};
export const ErrorChecked: Story = {
  args: {
    disabled: false,
    error: true,
    state: CheckBoxState.Checked,
  },
};
export const ErrorIndeterminate: Story = {
  args: {
    disabled: false,
    error: true,
    state: CheckBoxState.Indeterminate,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    error: false,
    state: CheckBoxState.Unchecked,
  },
};
export const DisabledChecked: Story = {
  args: {
    disabled: true,
    error: false,
    state: CheckBoxState.Checked,
  },
};
export const DisabledIndeterminate: Story = {
  args: {
    disabled: true,
    error: false,
    state: CheckBoxState.Indeterminate,
  },
};

export const Interactive: Story = {
  render: () => {
    const [selected, setSelected] = useState(false);
    return (
      <>
        <CheckBox
          onClick={() => setSelected(!selected)}
          state={selected ? CheckBoxState.Checked : CheckBoxState.Unchecked}
        />
        <CheckBox
          onClick={() => setSelected(!selected)}
          error
          state={selected ? CheckBoxState.Checked : CheckBoxState.Unchecked}
        />
        <CheckBox
          onClick={() => {}}
          disabled
          state={selected ? CheckBoxState.Checked : CheckBoxState.Unchecked}
        />
      </>
    );
  },
};
