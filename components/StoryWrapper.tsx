import { styled } from 'lib/theme'
import { Box } from 'primitives/Box'

// Not all stories may want padding, especially at the organism/template level, so this makes it
// convenient to repeat but also optional (versus wrapping every Story via SB decorator)
export const StoryWrapper = styled(Box, {
  padding: '16px',
  width: '100%',
})
