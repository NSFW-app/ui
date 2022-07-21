import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import ttypescript from 'ttypescript'
import url from '@rollup/plugin-url'
import styles from 'rollup-plugin-styles'
import path from 'path'
import pkg from './package.json'

// const production = !process.env.ROLLUP_WATCH

const input = `./src/index.ts`

// Asset name for "styles" plugin `extract: true`
// const assetFileNames = 'assets/css/[name][extname]'

const getPlugins = (format) => [
  // Automatically externalize peerDependencies in a rollup bundle
  peerDepsExternal(),
  // A Rollup plugin which locates modules using the Node resolution algorithm, for
  // using third party modules in node_modules
  resolve(),
  // A Rollup plugin to convert CommonJS modules to ES6
  commonjs(),
  // Typescript compiler
  typescript({
    sourceMap: true,
    exclude: ['**/__tests__/**', '**/*.stories*'],
    // Patch the TS compile module with [ttypescript](https://www.npmjs.com/package/ttypescript)
    // to support custom transformers [@zerollup/ts-transform-paths](https://www.npmjs.com/package/@zerollup/ts-transform-paths#setup-for-rollup-plugin-typescript2).
    // See tsconfig "plugins".
    typescript: ttypescript,
    ...(format === 'esm'
      ? { declaration: true, declarationDir: path.dirname(pkg.module) }
      : {}),
  }),
  // Bundle fonts as base64 strings
  url({
    include: ['**/*.ttf', '**/*.woff', '**/*.woff2'],
    limit: Infinity,
    emitFiles: false,
  }),
  // Bundle styles
  styles({
    // mode: 'extract',
  }),
]

const config = [
  // Build ESM bundle with Type Declarations
  {
    input,
    output: {
      dir: path.dirname(pkg.module),
      format: 'esm',
      exports: 'named',
      sourcemap: true,
      entryFileNames: '[name].mjs',
      // // React v17 weirdness
      // // - https://github.com/facebook/react/issues/20235
      paths: {
        'react/jsx-runtime': 'react/jsx-runtime.js',
      },
    },
    plugins: getPlugins('esm'),
    watch: {
      clearScreen: false,
    },
  },
  // Build a CJS bundle
  {
    input,
    output: {
      dir: path.dirname(pkg.main),
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
      entryFileNames: '[name].cjs',
    },
    plugins: getPlugins('cjs'),
    watch: false,
  },
]

export default config
