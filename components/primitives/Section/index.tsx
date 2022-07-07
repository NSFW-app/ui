import { styled, theme } from 'lib/theme'

export const Section = styled('section', {
  color: theme.colors.gray900,
  backgroundColor: theme.colors.gray100,
  transition: 'background-color 200ms ease, color 200ms ease',
})
