import type { Meta, StoryObj } from '@storybook/react';
import { BADGE } from '@geometricpanda/storybook-addon-badges';

import { PlainTooltipBox, IconButton, IconButtonType, Icon } from '..';
import React from 'react';

const meta = {
  title: 'Components/PlainTooltipBox',
  component: PlainTooltipBox,
  parameters: {
    layout: 'centered',
    badges: [BADGE.EXPERIMENTAL],
  },
  argTypes: {
    style: {
      description: 'CSS styles to be applied to the HTMLButtonElement.',
    },
  },
} satisfies Meta<typeof PlainTooltipBox>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Standard: Story = {
  args: {
    content: 'Help',
    children: (
      <IconButton onClick={() => {}} type={IconButtonType.Filled}>
        <Icon icon='help' />
      </IconButton>
    ),
  },
};
