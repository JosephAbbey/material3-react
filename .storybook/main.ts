import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    '@storybook/addon-storysource',
    '@storybook/addon-styling',
    '@geometricpanda/storybook-addon-badges',
  ],
  core: {
    builder: {
      name: '@storybook/builder-vite',
      options: { viteConfigPath: './vite.storybook.config.js' },
    },
  },
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: true,
  },
};
export default config;
