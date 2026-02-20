import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// ESM config, includes optimizeDeps and esbuild loader settings, explicit input
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'framer-motion',
      'gsap',
      'locomotive-scroll',
      'react-spring',
      'three',
      'zustand',
      'immer',
      'classnames',
      'recharts',
      'react-hot-toast'
    ],
    esbuildOptions: {
      loader: {
        '.js': 'jsx'
      }
    }
  },
  esbuild: {
    loader: 'jsx',
    include: /src\/.*\.jsx?$/
  },
  build: {
    rollupOptions: {
      input: ['index.html']
    }
  }
});
