import { styled } from 'core/stitches'

export const Nav = styled('nav', {
  display: 'flex',
  variants: {
    type: {
      vertical: {
        flexDirection: 'column',
      },
      horizontal: {},
    },
  },
  defaultVariants: {
    type: 'horizontal',
  },
})
