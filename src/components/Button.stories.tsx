import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';
import { Icon } from './Icon';
import React from 'react';

const meta = {
  title: 'Components/Button',
  component: Button,
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
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    enabled: true,
    children: <>Hello</>,
  },
};
export const Disabled: Story = {
  args: {
    enabled: false,
    children: <>Hello</>,
  },
};
export const WithIcon: Story = {
  args: {
    enabled: true,
    children: (
      <>
        <Icon icon='face' />
        Hello
      </>
    ),
  },
};
export const WithWidth: Story = {
  args: {
    enabled: true,
    style: {
      width: '200px',
    },
    children: <>Hello</>,
  },
};
export const WithWidthAndIcon: Story = {
  args: {
    enabled: true,
    style: {
      width: '200px',
    },
    children: (
      <>
        <Icon icon='face' />
        Hello
      </>
    ),
  },
};
