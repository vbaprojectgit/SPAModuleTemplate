import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import { nodePolyfills } from 'vite-plugin-node-polyfills';
import basicSsl from '@vitejs/plugin-basic-ssl';
import path from 'path';
import externalize from 'vite-plugin-externalize-dependencies';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';
import prefixer from 'postcss-prefix-selector';
import packageJson from './package.json';

const externalDependencies = [
  'react',
  'react-dom',
  'react-dom/client',
  'react-router-dom',
  'react/jsx-dev-runtime',
  'react/jsx-runtime',
  'styled-components',
  'web-modules-common'
];

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/indexModule.tsx'),
      name: "index",
      formats: ['es']
    },
    rollupOptions: {
      external: externalDependencies,
    },
  },

  plugins: [
    externalize({externals: externalDependencies}),
    cssInjectedByJsPlugin(),
    react(), svgr(), basicSsl()
  ]
});

