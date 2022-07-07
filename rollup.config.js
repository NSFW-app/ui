import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import ttypescript from 'ttypescript'
import url from '@rollup/plugin-url'
import styles from 'rollup-plugin-styles'
import path from 'path'
import pkg from './package.json'

const production = !process.env.ROLLUP_WATCH

const modulesRoot = './src'
const input = `${modulesRoot}/index.ts`
const outputDir = path.dirname(pkg.module)

// Asset name for "styles" plugin
const cssFileNames = 'assets/css/[name][extname]'

const config = {
  input,
  output: {
    dir: outputDir,
    format: 'esm',
    exports: 'named',
    sourcemap: production,
    // preserveModules: true,
    // React v17 weirdness
    // - https://github.com/facebook/react/issues/20235
    paths: {
      'react/jsx-runtime': path.resolve('./node_modules/react/jsx-runtime.js'),
    },
    assetFileNames: cssFileNames,
  },
  plugins: [
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
      declaration: true,
      declarationDir: outputDir,
      exclude: ['**/__tests__/**', '**/*.stories*'],
      // Patch the TS compile module with [ttypescript](https://www.npmjs.com/package/ttypescript)
      // to support custom transformers [@zerollup/ts-transform-paths](https://www.npmjs.com/package/@zerollup/ts-transform-paths#setup-for-rollup-plugin-typescript2).
      // See tsconfig "plugins".
      typescript: ttypescript,
    }),
    url({
      include: ['**/*.ttf', '**/*.woff', '**/*.woff2'],
      sourceDir: `${modulesRoot}/assets`,
      destDir: `${outputDir}/assets`,
      fileName: '[dirname][name][extname]',
    }),
    styles({
      // mode: 'extract',
    }),
  ],
  watch: {
    clearScreen: false,
  },
}

export default config
