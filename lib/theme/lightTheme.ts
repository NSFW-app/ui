import { createTheme, theme } from '.'

export const lightMode = createTheme('light-theme', {
  colors: {
    voilet100: theme.colors.voilet200.value,
    voilet200: theme.colors.voilet100.value,
    gray900: theme.colors.gray100.value,
    gray800: theme.colors.gray400.value,
    gray700: theme.colors.gray500.value,
    gray600: theme.colors.gray600.value,
    gray500: theme.colors.gray700.value,
    gray400: theme.colors.gray800.value,
    gray300: theme.colors.gray300.value,
    gray100: theme.colors.gray900.value,
  },
})
