import { styled } from 'core/stitches'
import { theme } from 'core/stitches'
import { Box } from 'primitives/Box'

export const TextSkeleton = styled(Box, {
  display: 'inline-block',
  width: '100%',
  height: '12px',
  background: theme.colors.gray400,
  borderRadius: '3px',
})
