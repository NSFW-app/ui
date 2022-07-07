import { styled, theme } from 'lib/theme'
import { animated } from '@react-spring/web'

export const Box = styled(animated.div, {
  color: theme.colors.gray900,
  backgroundColor: theme.colors.gray100,
  transition: 'background-color 200ms ease, color 200ms ease',
  variants: {
    // TODO: a lot of Box usages are setting this over and over, implement variant across the codebase, or rethink the bg color default.
    transparent: {
      true: { backgroundColor: 'transparent' },
    },
  },
})
