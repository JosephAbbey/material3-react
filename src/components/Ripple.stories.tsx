import type { Meta, StoryObj } from '@storybook/react';
import { BADGE } from '@geometricpanda/storybook-addon-badges';

import { Ripple } from './Ripple';
import React from 'react';

const meta = {
  title: 'Components/Ripple',
  component: Ripple,
  render: (args) => (
    <div
      style={{
        width: '100px',
        height: '100px',
        backgroundColor: 'var(--md-sys-color-primary)',
      }}>
      <Ripple {...args} />
    </div>
  ),
  parameters: {
    layout: 'centered',
    badges: [BADGE.EXPERIMENTAL],
  },
  argTypes: {
    disabled: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Ripple>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Box: Story = {
  args: {
    disabled: false,
  },
};
