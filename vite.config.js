import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

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
      'react-spring'
    ],
    esbuildOptions: {
      loader: { '.js': 'jsx' }
    }
  },
  esbuild: {
    loader: 'jsx',
    include: /src\/.*\.jsx?$/
  },
  build: {
    rollupOptions: {
      input: 'index.html'
    }
  }
});
