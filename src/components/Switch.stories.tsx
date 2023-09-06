import type { Meta, StoryObj } from '@storybook/react';
import { BADGE } from '@geometricpanda/storybook-addon-badges';

import { Switch, Icon } from '..';
import React, { useState } from 'react';

const meta = {
  title: 'Components/Switch',
  component: Switch,
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
    selected: {
      control: 'boolean',
      description: 'Controls the Selected state of this button.',
    },
    style: {
      description: 'CSS styles to be applied to the HTMLButtonElement.',
    },
  },
} satisfies Meta<typeof Switch>;

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
export const DisabledSelected: Story = {
  args: {
    disabled: true,
    selected: true,
  },
};
export const Interactive: Story = {
  render: () => {
    const [selected, setSelected] = useState(false);
    return (
      <>
        <Switch onClick={() => setSelected(!selected)} selected={selected} />
        <br />
        <Switch
          onClick={() => setSelected(!selected)}
          selected={selected}
          selectedIcon={<Icon icon='check' />}
        />
        <br />
        <Switch
          onClick={() => setSelected(!selected)}
          selected={selected}
          selectedIcon={<Icon icon='check' />}
          unselectedIcon={<Icon icon='close' />}
        />
        <br />
        <Switch
          onClick={() => {}}
          selected={selected}
          disabled
          selectedIcon={<Icon icon='check' />}
          unselectedIcon={<Icon icon='close' />}
        />
      </>
    );
  },
};
