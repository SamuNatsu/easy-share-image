/// Rollup config
import { defineConfig } from 'rollup';

// Plugins
import dts from 'rollup-plugin-dts';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';

// Export config
export default [
  defineConfig({
    input: 'src/main.ts',
    output: [
      {
        file: 'dist/bundle.esm.js',
        format: 'es'
      },
      {
        file: 'dist/bundle.esm.min.js',
        format: 'es',
        sourcemap: true,
        plugins: [terser()]
      },
      {
        file: 'dist/bundle.iife.js',
        format: 'iife',
        name: 'EasyShareImage',
        sourcemap: true,
        plugins: [terser()]
      }
    ],
    plugins: [typescript()]
  }),

  defineConfig({
    input: 'dist/declaration/main.d.ts',
    output: {
      file: 'dist/bundle.d.ts',
      format: 'es'
    },
    plugins: [dts()]
  })
];
