import { styled } from 'core/stitches'
import { animated } from '@react-spring/web'

export const Box = styled(animated.div, {
  variants: {
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
