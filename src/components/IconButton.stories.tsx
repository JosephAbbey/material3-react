import type { Meta, StoryObj } from '@storybook/react';
import { BADGE } from '@geometricpanda/storybook-addon-badges';

import { IconButton, IconButtonType } from './IconButton';
import { Icon } from './Icon';
import React from 'react';

const meta = {
  title: 'Components/IconButton',
  component: IconButton,
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
    type: {
      control: 'select',
      options: IconButtonType,
      description: 'The type of button to display.',
    },
    style: {
      description: 'CSS styles to be applied to the HTMLButtonElement.',
    },
  },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Standard: Story = {
  args: {
    disabled: false,
    type: IconButtonType.Standard,
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
    type: IconButtonType.Standard,
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
    type: IconButtonType.Filled,
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
    type: IconButtonType.Filled,
    children: (
      <>
        <Icon icon='cable' />
      </>
    ),
  },
};

export const Tonal: Story = {
  args: {
    disabled: false,
    type: IconButtonType.Tonal,
    children: (
      <>
        <Icon icon='cable' />
      </>
    ),
  },
};
export const TonalDisabled: Story = {
  args: {
    disabled: true,
    type: IconButtonType.Tonal,
    children: (
      <>
        <Icon icon='cable' />
      </>
    ),
  },
};

export const Outlined: Story = {
  args: {
    disabled: false,
    type: IconButtonType.Outlined,
    children: (
      <>
        <Icon icon='cable' />
      </>
    ),
  },
};
export const OutlinedDisabled: Story = {
  args: {
    disabled: true,
    type: IconButtonType.Outlined,
    children: (
      <>
        <Icon icon='cable' />
      </>
    ),
  },
};
