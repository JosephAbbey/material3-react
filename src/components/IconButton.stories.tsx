import type { Meta, StoryObj } from '@storybook/react';

import { IconButton } from './IconButton';
import { Icon } from './Icon';
import React from 'react';

const meta = {
  title: 'Components/IconButton',
  component: IconButton,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    enabled: {
      control: 'boolean',
    },
    onClick: { action: 'clicked' },
    children: {
      control: 'string',
    },
  },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    enabled: true,
    children: (
      <>
        <Icon icon='cable' />
      </>
    ),
  },
};
export const Disabled: Story = {
  args: {
    enabled: false,
    children: (
      <>
        <Icon icon='cable' />
      </>
    ),
  },
};
