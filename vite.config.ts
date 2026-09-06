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
        homepage: path.resolve(configDir, 'index.html'),
        storyboardWorkbench: path.resolve(configDir, 'redesign/cases/storyboard-workbench/index.html'),
        sampoWirelessCommercial: path.resolve(configDir, 'redesign/cases/sampo-wireless-commercial/index.html'),
        presentationAutomation: path.resolve(configDir, 'redesign/cases/presentation-automation/index.html'),
      },
    },
  },
});
