import * as _PopOver from '@radix-ui/react-popover'
import { styled, keyframes } from '@stitches/react'
import { theme } from 'core/stitches'

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

export const PopOver = styled(_PopOver.Root)

export const PopOverContent = styled(_PopOver.Content, {
  background: theme.colors.gray600,
  borderRadius: '6px',
  border: `1px solid ${theme.colors.voilet100}`,

  variants: {
    basic: {
      true: basicPop,
    },
  },
})

export const PopOverTrigger = styled(_PopOver.Trigger, {
  backgroundColor: 'transparent',
  border: 'none',
  variants: {
    basic: {
      true: basicPop,
    },
  },
})

export const PopOverArrow = styled(_PopOver.Arrow, {
  fill: theme.colors.voilet100,
})
