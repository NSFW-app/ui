import { styled } from 'core/stitches'
import { theme } from 'core/stitches'
import { Box } from 'primitives/Box'

export const TabsTrack = styled(Box, {
  display: 'flex',
  height: '34px',
  width: '100%',
  borderRadius: '9px',
  // TODO: look into why this doesn't override the Box backgroundColor style
  backgroundColor: `${theme.colors.gray400} !important`,
  border: `2px solid ${theme.colors.gray400}`,
})
