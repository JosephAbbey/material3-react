import type { Meta, StoryObj } from '@storybook/react';
import { BADGE } from '@geometricpanda/storybook-addon-badges';

import { IconToggleButton } from './IconToggleButton';
import { Icon } from './Icon';
import React from 'react';

const meta = {
  title: 'Components/IconToggleButton',
  component: IconToggleButton,
  parameters: {
    layout: 'centered',
    badges: [BADGE.EXPERIMENTAL],
  },
  argTypes: {
    disabled: {
      control: 'boolean',
    },
    filled: {
      control: 'boolean',
    },
    selected: {
      control: 'boolean',
    },
    onClick: { action: 'clicked' },
    children: {
      control: 'string',
    },
  },
} satisfies Meta<typeof IconToggleButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Standard: Story = {
  args: {
    disabled: false,
    filled: false,
    selected: false,
    children: (
      <>
        <Icon icon='cable' />
      </>
    ),
  },
};
export const StandardSelected: Story = {
  args: {
    disabled: false,
    filled: false,
    selected: true,
    children: (
      <>
        <Icon icon='cable' />
      </>
    ),
  },
};
export const StandardDisabled: Story = {
  args: {
    disabled: true,
    filled: false,
    selected: false,
    children: (
      <>
        <Icon icon='cable' />
      </>
    ),
  },
};
export const Filled: Story = {
  args: {
    disabled: false,
    filled: true,
    selected: false,
    children: (
      <>
        <Icon icon='cable' />
      </>
    ),
  },
};
export const FilledSelected: Story = {
  args: {
    disabled: false,
    filled: true,
    selected: true,
    children: (
      <>
        <Icon icon='cable' />
      </>
    ),
  },
};
export const FilledDisabled: Story = {
  args: {
    disabled: true,
    filled: true,
    selected: false,
    children: (
      <>
        <Icon icon='cable' />
      </>
    ),
  },
};
