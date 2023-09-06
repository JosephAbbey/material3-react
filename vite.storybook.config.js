import { defineConfig } from 'vite';

/* global process */

export default defineConfig({
  resolve: {
    alias: [
      { find: '@', replacement: process.cwd() + '/node_modules' },
      { find: '~', replacement: process.cwd() + '/src' },
    ],
  },
});
