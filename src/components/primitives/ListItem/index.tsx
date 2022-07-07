import { styled, theme } from 'core/stitches'
import { textBody2Css } from 'primitives/Text'

// TODO This should not be in the primitive
const isOrderPage = {
  backgroundColor: `${theme.colors.gray300} !important`,
  borderBottom: `1px solid ${theme.colors.gray500} !important`,
  '&:hover': {
    backgroundColor: `${theme.colors.gray400} !important`,
  },
}

export const ListItem = styled('li', {
  ...textBody2Css,
  variants: {
    isOrder: {
      true: isOrderPage,
    },
  },
})
