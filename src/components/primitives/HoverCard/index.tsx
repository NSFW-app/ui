import * as _HoverCard from '@radix-ui/react-hover-card'
import { styled, theme } from 'core/stitches'

export const HoverCard = styled(_HoverCard.Root, {})

export const HoverCardTrigger = styled(_HoverCard.Trigger, {})

export const HoverCardContent = styled(_HoverCard.Content, {
  backgroundColor: theme.colors.gray300,
  color: theme.colors.gray800,
  padding: '19px 16px 16px 16px',
  border: `1px solid ${theme.colors.gray500}`,
  borderRadius: '6px',
  boxShadow: `0 0 40px 4px rgba(0, 0, 0, 0.5)`,
  marginTop: '10px',
})

export const HoverCardArrow = styled(_HoverCard.Arrow, {
  fill: theme.colors.gray500,
  marginTop: '-10px',
})
