import type { ComponentProps } from '@stitches/react'
import type * as Stitches from '@stitches/react'
import { defaultTheme } from './themes/default'

// CSS property scoped by config, use to apply typings to any CSS object
export type CSS = Stitches.CSS<typeof defaultTheme.config>
// Helper for CSS as a prop
export type CSSProp = { css?: CSS }
// Commonly used, can be imported from the core lib versus @stitches
export type { ComponentProps }
// Alternate themes - attach directly onto exported Stitches namespace, as it fits in with "theme" 
// being default, and named being additional. i.e { theme, lightTheme, ...rest }
export * from './themes/light'
// Global styles; modular inclusion
export * as globals from './styles'
// Stitches custom utilities
export * as utils from './utils'

// Expose core Stitches theming properties
export const {
  styled,
  css,
  keyframes,
  theme,
  config,
  getCssText,
  createTheme,
  globalCss: createGlobalCss,
  // Additional Stitches props - never used, not exporting for now.
  // prefix,
  // reset,
} = defaultTheme
