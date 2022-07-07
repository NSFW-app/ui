import { styled, theme } from 'lib/theme'
import { textBody2Css } from 'primitives/Text'

export const Label = styled('label', {
  ...textBody2Css,
  color: theme.colors.gray800,
  marginBottom: '4px',
  variants: {
    capitalized: {
      true: { textTransform: 'capitalize' },
    },
  },
})
