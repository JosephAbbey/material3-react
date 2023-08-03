import type { Meta, StoryObj } from '@storybook/react';
import { BADGE } from '@geometricpanda/storybook-addon-badges';

import { Switch } from './Switch';
import React, { useState } from 'react';
import { Icon } from './Icon';

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
    checked: {
      control: 'boolean',
      description: 'Controls the checked state of this button.',
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
    checked: false,
  },
};
export const Checked: Story = {
  args: {
    disabled: false,
    checked: true,
  },
};
export const Disabled: Story = {
  args: {
    disabled: true,
    checked: false,
  },
};
export const DisabledChecked: Story = {
  args: {
    disabled: true,
    checked: true,
  },
};
export const Interactive: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    return (
      <>
        <Switch onClick={() => setChecked(!checked)} checked={checked} />
        <br />
        <Switch
          onClick={() => setChecked(!checked)}
          checked={checked}
          checkedIcon={<Icon icon='surfing' />}
        />
        <br />
        <Switch
          onClick={() => setChecked(!checked)}
          checked={checked}
          checkedIcon={<Icon icon='surfing' />}
          uncheckedIcon={<Icon icon='beach_access' />}
        />
        <br />
        <Switch
          onClick={() => {}}
          checked={checked}
          disabled
          checkedIcon={<Icon icon='surfing' />}
          uncheckedIcon={<Icon icon='beach_access' />}
        />
      </>
    );
  },
};
