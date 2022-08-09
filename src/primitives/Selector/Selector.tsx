import { styled, keyframes, ComponentProps } from 'core/stitches'
import * as SelectPrimitive from '@radix-ui/react-select'
import { theme } from 'core/stitches'

const appear = keyframes({
  '0%': {
    opacity: 0,
  },
  '100%': {
    opacity: 1,
  },
})

const StyledTrigger = styled(SelectPrimitive.SelectTrigger, {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'start',
  borderRadius: 12,
  padding: '0 15px',
  fontSize: 15,
  height: 50,
  backgroundColor: '$gray400',
  color: '$gray900',
  boxShadow: '0 2px 10px $gray100',
  border: '1px solid transparent',
  whiteSpace: 'nowrap',
  overflow: 'hidden',

  '&:hover': { border: '1px solid $voilet100' },
  '&[data-placeholder]': { color: '$gray900' },
})

const StyledIcon = styled(SelectPrimitive.SelectIcon, {
  margin: '2px 0 0 15px',
})

const StyledContent = styled(SelectPrimitive.Content, {
  backgroundColor: '$gray400',
  borderRadius: 10,
  zIndex: theme.zIndices.layerOne,
  position: 'fixed',
  top: 80,

  '&[data-state=open]': {
    animation: `${appear} 150ms ease-in`,
  },
})

const StyledViewport = styled(SelectPrimitive.Viewport, { padding: '10px 0' })

const StyledItem = styled(SelectPrimitive.Item, {
  all: 'unset',
  display: 'flex',
  gap: 10,
  height: 50,
  alignItems: 'center',
  fontSize: 15,
  lineHeight: 1,
  color: '$gray800',
  padding: '0 15px 0 15px',
  cursor: 'pointer',
  overflow: 'hidden',

  '&[data-highlighted]': {
    color: '$gray900',
  },

  '&[data-disabled]': {
    color: '$voilet100',
    pointerEvents: 'none',
  },

  '&[data-state=checked]': {
    transition: theme.transitions.easeOutExpo,
    color: '$gray900',
  },
})

const StyledLabel = styled(SelectPrimitive.Label, {
  padding: '0 25px',
  fontSize: 15,
  lineHeight: '25px',
  color: '$voilet100',
})

const StyledSeparator = styled(SelectPrimitive.Separator, {
  height: 1,
  backgroundColor: '$voilet100',
  margin: 5,
})

const StyledItemIndicator = styled(SelectPrimitive.ItemIndicator, {
  position: 'absolute',
  left: 0,
  width: 25,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
})

// Exports
export const Root = SelectPrimitive.Root
export const Trigger = StyledTrigger
export const Value = SelectPrimitive.Value
export const Icon = StyledIcon
export const Content: React.FC<ComponentProps<typeof StyledContent>> = ({
  children,
  ...props
}) => {
  return (
    <SelectPrimitive.Portal>
      <StyledContent {...props}>{children}</StyledContent>
    </SelectPrimitive.Portal>
  )
}
export const Viewport = StyledViewport
export const Group = SelectPrimitive.Group
export const Item = StyledItem
export const ItemText = SelectPrimitive.ItemText
export const ItemIndicator = StyledItemIndicator
export const Label = StyledLabel
export const Separator = StyledSeparator
