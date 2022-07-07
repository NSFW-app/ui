import { defaultTheme } from '../themes/default'

const { globalCss, theme } = defaultTheme

export const nprogress = globalCss({
  '#nprogress .bar': {
    background: `${theme.colors.voilet100} !important`,
    height: '2px !important',
  },

  '#nprogress .peg': {
    boxShadow: `0 0 10px ${theme.colors.voilet100}, 0 0 5px ${theme.colors.voilet100} !important`,
  },
})
