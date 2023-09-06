import type { Meta, StoryObj } from '@storybook/react';
import { BADGE } from '@geometricpanda/storybook-addon-badges';

import { Checkbox, CheckboxState } from '..';
import React, { useState } from 'react';

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
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
      options: CheckboxState,
      description: 'Controls the selected state of this button.',
    },
    style: {
      description: 'CSS styles to be applied to the HTMLButtonElement.',
    },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Standard: Story = {
  args: {
    disabled: false,
    error: false,
    state: CheckboxState.Unselected,
  },
};
export const Selected: Story = {
  args: {
    disabled: false,
    error: false,
    state: CheckboxState.Selected,
  },
};
export const Indeterminate: Story = {
  args: {
    disabled: false,
    error: false,
    state: CheckboxState.Indeterminate,
  },
};

export const Error: Story = {
  args: {
    disabled: false,
    error: true,
    state: CheckboxState.Unselected,
  },
};
export const ErrorSelected: Story = {
  args: {
    disabled: false,
    error: true,
    state: CheckboxState.Selected,
  },
};
export const ErrorIndeterminate: Story = {
  args: {
    disabled: false,
    error: true,
    state: CheckboxState.Indeterminate,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    error: false,
    state: CheckboxState.Unselected,
  },
};
export const DisabledSelected: Story = {
  args: {
    disabled: true,
    error: false,
    state: CheckboxState.Selected,
  },
};
export const DisabledIndeterminate: Story = {
  args: {
    disabled: true,
    error: false,
    state: CheckboxState.Indeterminate,
  },
};

export const Interactive: Story = {
  render: () => {
    const [selected, setSelected] = useState(false);
    return (
      <>
        <Checkbox
          onClick={() => setSelected(!selected)}
          state={selected ? CheckboxState.Selected : CheckboxState.Unselected}
        />
        <Checkbox
          onClick={() => setSelected(!selected)}
          error
          state={selected ? CheckboxState.Selected : CheckboxState.Unselected}
        />
        <Checkbox
          onClick={() => {}}
          disabled
          state={selected ? CheckboxState.Selected : CheckboxState.Unselected}
        />
      </>
    );
  },
};
