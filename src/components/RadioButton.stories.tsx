import type { Meta, StoryObj } from '@storybook/react';
import { BADGE } from '@geometricpanda/storybook-addon-badges';

import { RadioButton } from './RadioButton';
import React, { useState } from 'react';

const meta = {
  title: 'Components/RadioButton',
  component: RadioButton,
  parameters: {
    layout: 'centered',
    badges: [BADGE.EXPERIMENTAL],
  },
  argTypes: {
    disabled: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof RadioButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Standard: Story = {
  args: {
    disabled: false,
    checked: false,
  },
};
export const StandardChecked: Story = {
  args: {
    disabled: false,
    checked: true,
  },
};
export const StandardDisabled: Story = {
  args: {
    disabled: true,
    checked: false,
  },
};
export const StandardCheckedDisabled: Story = {
  args: {
    disabled: true,
    checked: true,
  },
};
export const Interactive: Story = {
  render: () => {
    const [selected, setSelected] = useState(0);
    return (
      <>
        <RadioButton
          name='Interactive'
          id='0'
          onClick={() => setSelected(0)}
          checked={selected == 0}
        />
        <RadioButton
          name='Interactive'
          id='1'
          onClick={() => setSelected(1)}
          checked={selected == 1}
        />
        <RadioButton
          name='Interactive'
          id='2'
          onClick={() => setSelected(2)}
          checked={selected == 2}
        />
      </>
    );
  },
};
