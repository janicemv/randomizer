import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import pkg from 'node-polyfill-webpack-plugin';
const { NodeGlobalsPolyfillPlugin } = pkg;

export default defineConfig({
  plugins: [react(), NodeGlobalsPolyfillPlugin({})],
  base: '/randomizer/',
});