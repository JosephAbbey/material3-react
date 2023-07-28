import type { Meta, StoryObj } from '@storybook/react';

import { Icon } from './Icon';

const meta = {
  title: 'Components/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Outlined: Story = {
  args: {
    icon: 'settings',
    filled: false,
  },
};
export const Filled: Story = {
  args: {
    icon: 'settings',
    filled: true,
  },
};
