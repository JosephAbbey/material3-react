import type { Preview } from '@storybook/react';

import { themes } from '@storybook/theming';
import React from 'react';

import { MaterialTheme } from '../src/components/MaterialTheme';

const preview: Preview = {
  decorators: [
    (Story) => (
      <MaterialTheme
        // sourceColor={0x7f67be}
        style={{
          padding: '2rem',
          border:
            '1px dashed color-mix(in srgb, var(--md-sys-color-on-background) 50%, transparent)',
          borderRadius: '0.25rem',
        }}>
        <Story />
      </MaterialTheme>
    ),
  ],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      theme: window.matchMedia('(prefers-color-scheme: dark)').matches
        ? themes.dark
        : themes.light,
      toc: true,
    },
  },
};

export default preview;
