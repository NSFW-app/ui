import { styled, theme } from 'core/stitches'
import { Box } from 'primitives/Box'

export const Dot = styled(Box, {
  width: '8px',
  height: '8px',
  padding: '0px',
  borderRadius: '100%',
  backgroundColor: theme.colors.gray500,
  border: `1px solid ${theme.colors.gray700}`,
  margin: '0 2.5px',
  variants: {
    active: {
      true: {
        border: `1px solid ${theme.colors.voilet200}`,
        backgroundColor: theme.colors.voilet100,
      },
    },
  },
})
