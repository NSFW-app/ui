import { styled } from 'lib/theme'
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
    full: {
      true: { height: '100%', width: '100%' },
    },
    fullWidth: {
      true: { width: '100%' },
    },
    fullHeight: {
      true: { height: '100%' },
    },
  },
})
