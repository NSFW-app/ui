import { styled } from 'core/stitches'
import { Box } from 'primitives/Box'

export const Flex = styled(Box, {
  display: 'flex',
  variants: {
    center: {
      true: {
        justifyContent: 'center',
        alignItems: 'center',
      },
    },
    justifyCenter: {
      true: {
        justifyContent: 'center',
      },
    },
    alignCenter: {
      true: {
        alignItems: 'center',
      },
    },
    row: {
      true: { flexDirection: 'row' },
    },
    column: {
      true: { flexDirection: 'column' },
    },
  },
})
