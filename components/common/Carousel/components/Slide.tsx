import { styled, theme } from 'lib/theme'
import { Flex } from 'primitives/Flex'

export const Slide = styled(Flex, {
  backgroundColor: theme.colors.gray400,
  overflow: 'hidden',
  position: 'relative',
  userSelect: 'none',
  flexDirection: 'column',
})
