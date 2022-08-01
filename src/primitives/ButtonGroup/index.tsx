import { styled } from 'core/stitches'
import { Flex } from 'primitives/Flex'

export const ButtonGroup = styled(Flex, {
  variants: {
    orientation: {
      vertical: {
        flexDirection: 'column',
        [`& button`]: {
          borderRadius: 'unset',
        },
        [`& button:first-child, & button:first-child > *`]: {
          borderTopRightRadius: '8px',
          borderTopLeftRadius: '8px',
        },
        [`& button:last-child, & button:last-child > *`]: {
          border: '0px !important',
          borderBottomRightRadius: '8px',
          borderBottomLeftRadius: '8px',
        },
      },
      horizontal: {
        [`& button`]: {
          borderRadius: 'unset',
        },
        [`& button:first-child, & button:first-child > *`]: {
          borderTopLeftRadius: '8px',
          borderBottomLeftRadius: '8px',
        },
        [`& button:last-child, & button:last-child > *`]: {
          border: '0px !important',
          borderTopRightRadius: '8px',
          borderBottomRightRadius: '8px',
        },
      },
    },
  },
  defaultVariants: {
    orientation: 'horizontal',
  },
})
