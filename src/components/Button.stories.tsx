import type { Meta, StoryObj } from '@storybook/react';
import { BADGE } from '@geometricpanda/storybook-addon-badges';

import { Icon, Button, ButtonType } from '..';
import React from 'react';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    badges: [BADGE.BETA],
  },
  argTypes: {
    onClick: {
      action: 'clicked',
      description: 'Called when this button is clicked.',
    },
    type: {
      control: 'select',
      options: ButtonType,
      description: 'The type of button to display.',
    },
    disabled: {
      control: 'boolean',
      description:
        'Controls the enabled state of this button. When true, this component will not respond to user input, and it will appear visually disabled and disabled to accessibility services.',
    },
    style: {
      description: 'CSS styles to be applied to the HTMLButtonElement.',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Filled: Story = {
  args: {
    type: ButtonType.Filled,
    disabled: false,
    children: <>Hello</>,
  },
};
export const FilledDisabled: Story = {
  args: {
    type: ButtonType.Filled,
    disabled: true,
    children: <>Hello</>,
  },
};
export const FilledWithIcon: Story = {
  args: {
    type: ButtonType.Filled,
    disabled: false,
    children: (
      <>
        <Icon icon='face' />
        Hello
      </>
    ),
  },
};
export const FilledWithWidth: Story = {
  args: {
    type: ButtonType.Filled,
    disabled: false,
    style: {
      width: '200px',
    },
    children: <>Hello</>,
  },
};
export const FilledWithWidthAndIcon: Story = {
  args: {
    type: ButtonType.Filled,
    disabled: false,
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

export const Elevated: Story = {
  args: {
    type: ButtonType.Elevated,
    disabled: false,
    children: <>Hello</>,
  },
};
export const ElevatedDisabled: Story = {
  args: {
    type: ButtonType.Elevated,
    disabled: true,
    children: <>Hello</>,
  },
};
export const ElevatedWithIcon: Story = {
  args: {
    type: ButtonType.Elevated,
    disabled: false,
    children: (
      <>
        <Icon icon='face' />
        Hello
      </>
    ),
  },
};

export const Tonal: Story = {
  args: {
    type: ButtonType.Tonal,
    disabled: false,
    children: <>Hello</>,
  },
};
export const TonalDisabled: Story = {
  args: {
    type: ButtonType.Tonal,
    disabled: true,
    children: <>Hello</>,
  },
};
export const TonalWithIcon: Story = {
  args: {
    type: ButtonType.Tonal,
    disabled: false,
    children: (
      <>
        <Icon icon='face' />
        Hello
      </>
    ),
  },
};

export const Outlined: Story = {
  args: {
    type: ButtonType.Outlined,
    disabled: false,
    children: <>Hello</>,
  },
};
export const OutlinedDisabled: Story = {
  args: {
    type: ButtonType.Outlined,
    disabled: true,
    children: <>Hello</>,
  },
};
export const OutlinedWithIcon: Story = {
  args: {
    type: ButtonType.Outlined,
    disabled: false,
    children: (
      <>
        <Icon icon='face' />
        Hello
      </>
    ),
  },
};

export const Text: Story = {
  args: {
    type: ButtonType.Text,
    disabled: false,
    children: <>Hello</>,
  },
};
export const TextDisabled: Story = {
  args: {
    type: ButtonType.Text,
    disabled: true,
    children: <>Hello</>,
  },
};
export const TextWithIcon: Story = {
  args: {
    type: ButtonType.Text,
    disabled: false,
    children: (
      <>
        <Icon icon='face' />
        Hello
      </>
    ),
  },
};
