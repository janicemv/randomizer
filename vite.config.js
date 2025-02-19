import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import NodeGlobalsPolyfillPlugin from 'node-polyfill-webpack-plugin';

export default defineConfig({
  plugins: [
    react(),
    new NodeGlobalsPolyfillPlugin()
  ],
  base: '/randomizer/',
});