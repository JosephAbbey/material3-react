import type { Meta, StoryObj } from '@storybook/react';
import { BADGE } from '@geometricpanda/storybook-addon-badges';

import { BasicDialog } from './BasicDialog';
import React, { useState } from 'react';
import { Button, ButtonType } from './Button';
import { Icon } from './Icon';

const meta = {
  title: 'Components/BasicDialog',
  component: BasicDialog,
  render: (args) => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open</Button>
        <BasicDialog
          {...args}
          open={open}
          onDismiss={() => setOpen(false)}
          confirmButton={
            <Button type={ButtonType.Text} onClick={() => setOpen(false)}>
              Confirm
            </Button>
          }></BasicDialog>
      </>
    );
  },
  parameters: {
    layout: 'centered',
    badges: [BADGE.EXPERIMENTAL],
  },
  argTypes: {
    onDismiss: {
      action: 'dismiss',
      description:
        'Called when the user navigates away from a persistent tooltip by interacting with another ui element.',
    },
    style: {
      description: 'CSS styles to be applied to the HTMLButtonElement.',
    },
    open: {
      control: 'none',
    },
    confirmButton: {
      control: 'none',
    },
    icon: {
      control: 'none',
    },
    dismissButton: {
      control: 'none',
    },
  },
} satisfies Meta<typeof BasicDialog>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const A: Story = {
  args: {
    title: 'Rich Tooltip',
    children:
      "Rich tooltips bring attention to a particular element of feature that warrants the user's focus.",
    confirmButton: <></>,
  },
};
export const B: Story = {
  args: {
    icon: <Icon icon='bus_alert' />,
    title: 'Rich Tooltip',
    children:
      "Rich tooltips bring attention to a particular element of feature that warrants the user's focus.",
    confirmButton: <></>,
  },
};
export const C: Story = {
  args: {
    icon: <Icon icon='bus_alert' />,
    title: 'Rich Tooltip',
    children:
      "Rich tooltips bring attention to a particular element of feature that warrants the user's focus.",
    confirmButton: <></>,
    dismissButton: (
      <Button type={ButtonType.Text} onClick={() => {}}>
        Close
      </Button>
    ),
  },
};
