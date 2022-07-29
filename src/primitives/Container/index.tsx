import { styled, theme } from 'core/stitches'
import { Box } from 'primitives/Box'

export const Container = styled(Box, {
  maxWidth: theme.container.maxWidth,
  padding: theme.container.padding,
  width: '100%',
  margin: '0 auto',
})
