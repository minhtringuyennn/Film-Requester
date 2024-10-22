// vite.config.ts
import path from 'path';
import { TanStackRouterVite } from '@tanstack/router-plugin/vite';
import viteReact from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [TanStackRouterVite(), viteReact()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
});
