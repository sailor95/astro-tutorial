// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  vite: {
    server: {
      watch: {
        usePolling: true,
      },
      port: 4321,
      hmr: {
        clientPort: 4321,
      },
    },
  },
});
