import type { Meta, StoryObj } from '@storybook/react';
import { BADGE } from '@geometricpanda/storybook-addon-badges';

import { RichTooltipBox } from './RichTooltipBox';
import { IconButton } from './IconButton';
import { Icon } from './Icon';
import React from 'react';
import { Button, ButtonType } from './Button';

const meta = {
  title: 'Components/RichTooltipBox',
  component: RichTooltipBox,
  parameters: {
    layout: 'centered',
    badges: [BADGE.EXPERIMENTAL],
  },
  argTypes: {
    onHide: {
      action: 'hide',
      description:
        'Called when the user navigates away from a persistent tooltip by interacting with another ui element.',
    },
    style: {
      description: 'CSS styles to be applied to the HTMLButtonElement.',
    },
    visible: {
      if: {
        arg: 'persistent',
        truthy: true,
      },
    },
  },
} satisfies Meta<typeof RichTooltipBox>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const A: Story = {
  args: {
    title: 'Rich Tooltip',
    content:
      "Rich tooltips bring attention to a particular element of feature that warrants the user's focus.",
    action: (
      <>
        <Button onClick={() => {}} type={ButtonType.Text}>
          Action
        </Button>
        <Button onClick={() => {}} type={ButtonType.Text}>
          Action
        </Button>
      </>
    ),
    persistent: true,
    visible: true,
    children: (
      <IconButton onClick={() => {}}>
        <Icon icon='help' />
      </IconButton>
    ),
  },
};
export const B: Story = {
  args: {
    title: 'Rich Tooltip',
    content:
      "Rich tooltips bring attention to a particular element of feature that warrants the user's focus.",
    action: (
      <Button onClick={() => {}} type={ButtonType.Text}>
        Action
      </Button>
    ),
    persistent: true,
    visible: true,
    children: (
      <IconButton onClick={() => {}}>
        <Icon icon='help' />
      </IconButton>
    ),
  },
};
export const C: Story = {
  args: {
    title: 'Rich Tooltip',
    content:
      "Rich tooltips bring attention to a particular element of feature that warrants the user's focus.",
    persistent: true,
    visible: true,
    children: (
      <IconButton onClick={() => {}}>
        <Icon icon='help' />
      </IconButton>
    ),
  },
};
export const D: Story = {
  args: {
    content:
      "Rich tooltips bring attention to a particular element of feature that warrants the user's focus.",
    action: (
      <Button onClick={() => {}} type={ButtonType.Text}>
        Action
      </Button>
    ),
    persistent: true,
    visible: true,
    children: (
      <IconButton onClick={() => {}}>
        <Icon icon='help' />
      </IconButton>
    ),
  },
};
