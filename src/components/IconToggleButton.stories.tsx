import type { Meta, StoryObj } from '@storybook/react';
import { BADGE } from '@geometricpanda/storybook-addon-badges';

import { IconToggleButton } from './IconToggleButton';
import { Icon } from './Icon';
import React, { useState } from 'react';
import { IconButtonType } from './IconButton';

const meta = {
  title: 'Components/IconToggleButton',
  component: IconToggleButton,
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
    selected: {
      control: 'boolean',
      description: 'Controls the selected state of this button.',
    },
    style: {
      description: 'CSS styles to be applied to the HTMLButtonElement.',
    },
  },
} satisfies Meta<typeof IconToggleButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Standard: Story = {
  args: {
    disabled: false,
    type: IconButtonType.Standard,
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
    type: IconButtonType.Standard,
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
    type: IconButtonType.Standard,
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
    type: IconButtonType.Filled,
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
    type: IconButtonType.Filled,
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
    type: IconButtonType.Filled,
    selected: false,
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
    selected: false,
    children: (
      <>
        <Icon icon='cable' />
      </>
    ),
  },
};
export const TonalSelected: Story = {
  args: {
    disabled: false,
    type: IconButtonType.Tonal,
    selected: true,
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
    selected: false,
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
    selected: false,
    children: (
      <>
        <Icon icon='cable' />
      </>
    ),
  },
};
export const OutlinedSelected: Story = {
  args: {
    disabled: false,
    type: IconButtonType.Outlined,
    selected: true,
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
    selected: false,
    children: (
      <>
        <Icon icon='cable' />
      </>
    ),
  },
};

export const Interactive: Story = {
  render: () => {
    const [selected, setSelected] = useState(false);
    return (
      <>
        <IconToggleButton
          onClick={() => setSelected(!selected)}
          selected={selected}
          type={IconButtonType.Standard}>
          <Icon icon='cable' />
        </IconToggleButton>
        <IconToggleButton
          onClick={() => setSelected(!selected)}
          selected={selected}
          type={IconButtonType.Filled}>
          <Icon icon='cable' />
        </IconToggleButton>
        <IconToggleButton
          onClick={() => setSelected(!selected)}
          selected={selected}
          type={IconButtonType.Tonal}>
          <Icon icon='cable' />
        </IconToggleButton>
        <IconToggleButton
          onClick={() => setSelected(!selected)}
          selected={selected}
          type={IconButtonType.Outlined}>
          <Icon icon='cable' />
        </IconToggleButton>
      </>
    );
  },
};
