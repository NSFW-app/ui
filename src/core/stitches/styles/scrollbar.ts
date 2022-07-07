import { defaultTheme } from '../themes/default'

const { globalCss, theme } = defaultTheme

export const scrollbar = globalCss({
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
})
