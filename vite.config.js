import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost: 8800',
        changeOrigin: true,
      },
    },
  },
  esbuild: {
    jsxInject: `import React from 'react'`, // to fix auto import
  },
  resolve: {
    alias: {
      // '@': path.resolve(__dirname, './src/'),
      '@assets': path.resolve(__dirname, './src/assets/'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@components': path.resolve(__dirname, './src/components/'),
    },
  },
});
