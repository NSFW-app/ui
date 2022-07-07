import { styled, keyframes } from '@stitches/react'
import * as Popover from '@radix-ui/react-popover'
import { theme } from 'lib/theme'

const slideDown = keyframes({
  '0%': { opacity: 0, transform: 'translateY(-10px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
})

const slideUp = keyframes({
  '0%': { opacity: 0, transform: 'translateY(10px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
})

const basicPop = {
  backgroundColor: 'white !important',
  padding: '10px 30px',
  animationDuration: '0.6s',
  animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
  animationFillMode: 'forwards',
  '&[data-side="top"]': { animationName: slideUp },
  '&[data-side="bottom"]': { animationName: slideDown },
}
export const StyledContent = styled(Popover.Content, {
  background: theme.colors.gray600,
  borderRadius: '6px',
  border: `1px solid ${theme.colors.voilet100}`,

  variants: {
    basic: {
      true: basicPop,
    },
  },
})
export const StyledTrigger = styled(Popover.Trigger, {
  backgroundColor: 'transparent',
  border: 'none',
  variants: {
    basic: {
      true: basicPop,
    },
  },
})
export const StyledArrow = styled(Popover.Arrow, {
  fill: theme.colors.voilet100,
})
