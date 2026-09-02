import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  server: {
    port: 3000,
    host: '127.0.0.1',
  },
  build: {
    rollupOptions: {
      input: {
        legacy: path.resolve(__dirname, 'index.html'),
        redesign: path.resolve(__dirname, 'redesign/index.html'),
      },
    },
  },
});
