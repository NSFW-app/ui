import * as SwitchPrimitive from '@radix-ui/react-switch'
import { styled, theme } from 'lib/theme'

export const StyledSwitch = styled(SwitchPrimitive.Root, {
  all: 'unset',
  width: '48px',
  height: '30px',
  borderRadius: '9999px',
  backgroundColor: theme.colors.gray100,
  position: 'relative',
  WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
  '&:focus': { boxShadow: `0 0 0 1px ${theme.colors.gray100}` },
  '&:disabled': { backgroundColor: theme.colors.gray600 },
  '&:hover': { cursor: 'pointer' },
  '&[data-state="checked"]': { backgroundColor: theme.colors.voilet100 },
})

export const StyledThumb = styled(SwitchPrimitive.Thumb, {
  display: 'block',
  width: '22px',
  height: '22px',
  backgroundColor: 'white',
  borderRadius: '9999px',
  transition: 'transform 100ms',
  transform: 'translateX(3px)',
  willChange: 'transform',
  '&[data-state="checked"]': { transform: 'translateX(23px)' },
  variants: {
    disabled: {
      true: {
        backgroundColor: theme.colors.gray700,
        transform: 'translateX(23px)',
      },
    },
  },
})
