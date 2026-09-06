import path from 'path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';

const configDir = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  base: './',
  server: {
    port: 3000,
    host: '127.0.0.1',
  },
  build: {
    rollupOptions: {
      input: {
        legacy: path.resolve(configDir, 'index.html'),
        redesign: path.resolve(configDir, 'redesign/index.html'),
        storyboardWorkbench: path.resolve(configDir, 'redesign/cases/storyboard-workbench/index.html'),
      },
    },
  },
});
