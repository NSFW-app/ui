import { globalCss, theme } from 'lib/theme'

export const globalStyles = globalCss({
  '*': {
    fontFamily: theme.fonts.primary,
  },

  html: {
    scrollBehavior: 'smooth',
    // ios fix; scrolling fixed elements (top/bottom nav) would create a html page level scroll bar
    overflow: 'hidden',
  },

  body: {
    overflow: 'auto',
  },

  'html, body, #__next': {
    height: '100%',
    position: 'relative',
    margin: 0,
    backgroundColor: theme.colors.gray100,
  },
  // Desktop custom scrollbar
  '@media (hover: hover)': {
    '::-webkit-scrollbar': {
      width: '4px',
      backgroundColor: theme.colors.gray300,
    },
    '::-webkit-scrollbar-thumb': {
      backgroundColor: theme.colors.gray600,
      borderRadius: '7px',
    },
  },

  [`input[type='text'],
  input[type='email'],
  input[type='password'],
  input[type='number'],
  input[type='tel'],
  input[type='search'],
  input[type='search']::-webkit-search-decoration,
  input[type='search']::-webkit-search-cancel-button,
  input[type='search']::-webkit-search-results-button,
  input[type='search']::-webkit-search-results-decoration,
  textarea`]: {
    '-webkit-appearance': 'none',
    '-moz-appearance': 'none',
  },

  '#nprogress .bar': {
    background: `${theme.colors.voilet100} !important`,
    height: '2px !important',
  },

  '#nprogress .peg': {
    boxShadow: `0 0 10px ${theme.colors.voilet100}, 0 0 5px ${theme.colors.voilet100} !important`,
  },

  '@font-face': [
    {
      fontFamily: 'Inter',
      src: 'local("Inter-Thin"), url("/static/fonts/Inter/Inter-Thin.ttf") format("truetype")',
      fontWeight: 100,
      fontStyle: 'normal',
      fontDisplay: 'fallback',
    },
    {
      fontFamily: 'Inter',
      src: 'local("Inter-ExtraLight"), url("/static/fonts/Inter/Inter-ExtraLight.ttf") format("truetype")',
      fontWeight: 200,
      fontStyle: 'normal',
      fontDisplay: 'fallback',
    },
    {
      fontFamily: 'Inter',
      src: 'local("Inter-Light"), url("/static/fonts/Inter/Inter-Light.ttf") format("truetype")',
      fontWeight: 300,
      fontStyle: 'normal',
      fontDisplay: 'fallback',
    },
    {
      fontFamily: 'Inter',
      src: 'local("Inter-Regular"), url("/static/fonts/Inter/Inter-Regular.ttf") format("truetype")',
      fontWeight: 400,
      fontStyle: 'normal',
      fontDisplay: 'fallback',
    },
    {
      fontFamily: 'Inter',
      src: 'local("Inter-Medium"), url("/static/fonts/Inter/Inter-Medium.ttf") format("truetype")',
      fontWeight: 500,
      fontStyle: 'normal',
      fontDisplay: 'fallback',
    },
    {
      fontFamily: 'Inter',
      src: 'local("Inter-SemiBold"), url("/static/fonts/Inter/Inter-SemiBold.ttf") format("truetype")',
      fontWeight: 600,
      fontStyle: 'normal',
      fontDisplay: 'fallback',
    },
    {
      fontFamily: 'Inter',
      src: 'local("Inter-Bold"), url("/static/fonts/Inter/Inter-Bold.ttf") format("truetype")',
      fontWeight: 700,
      fontStyle: 'normal',
      fontDisplay: 'fallback',
    },
    {
      fontFamily: 'Inter',
      src: 'local("Inter-ExtraBold"), url("/static/fonts/Inter/Inter-ExtraBold.ttf") format("truetype")',
      fontWeight: 800,
      fontStyle: 'normal',
      fontDisplay: 'fallback',
    },
    {
      fontFamily: 'Inter',
      src: 'local("Inter-Black"), url("/static/fonts/Inter/Inter-Black.ttf") format("truetype")',
      fontWeight: 900,
      fontStyle: 'normal',
      fontDisplay: 'fallback',
    },
    {
      fontFamily: 'Roboto',
      src: 'local("Roboto-Light"), url("/static/fonts/Roboto/Roboto-Light.ttf") format("truetype")',
      fontWeight: 300,
      fontStyle: 'normal',
      fontDisplay: 'fallback',
    },
    {
      fontFamily: 'Roboto',
      src: 'local("Roboto-Regular"), url("/static/fonts/Roboto/Roboto-Regular.ttf") format("truetype")',
      fontWeight: 400,
      fontStyle: 'normal',
      fontDisplay: 'fallback',
    },
    {
      fontFamily: 'Roboto',
      src: 'local("Roboto-Medium"), url("/static/fonts/Roboto/Roboto-Medium.ttf") format("truetype")',
      fontWeight: 500,
      fontStyle: 'normal',
      fontDisplay: 'fallback',
    },
    {
      fontFamily: 'Roboto',
      src: 'local("Roboto-Bold"), url("/static/fonts/Roboto/Roboto-Bold.ttf") format("truetype")',
      fontWeight: 700,
      fontStyle: 'normal',
      fontDisplay: 'fallback',
    },
  ],
})
