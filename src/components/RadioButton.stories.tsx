import type { Meta, StoryObj } from '@storybook/react';
import { BADGE } from '@geometricpanda/storybook-addon-badges';

import { RadioButton } from '..';
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
    selected: false,
  },
};
export const Selected: Story = {
  args: {
    disabled: false,
    selected: true,
  },
};
export const Disabled: Story = {
  args: {
    disabled: true,
    selected: false,
  },
};
export const SelectedDisabled: Story = {
  args: {
    disabled: true,
    selected: true,
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
          selected={selected == 0}
        />
        <RadioButton
          name='Interactive'
          id='1'
          onClick={() => setSelected(1)}
          selected={selected == 1}
        />
        <RadioButton
          name='Interactive'
          id='2'
          onClick={() => setSelected(2)}
          selected={selected == 2}
        />
        <RadioButton
          name='Interactive'
          id='3'
          disabled
          onClick={() => {}}
          selected={selected == 3}
        />
      </>
    );
  },
};
