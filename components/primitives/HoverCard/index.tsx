import * as HoverCard from '@radix-ui/react-hover-card'
import { styled, theme } from 'lib/theme'

export const StyledHoverCard = styled(HoverCard.Root, {})

export const StyledTrigger = styled(HoverCard.Trigger, {})

export const StyledContent = styled(HoverCard.Content, {
  backgroundColor: theme.colors.gray300,
  color: theme.colors.gray800,
  padding: '19px 16px 16px 16px',
  border: `1px solid ${theme.colors.gray500}`,
  borderRadius: '6px',
  boxShadow: `0 0 40px 4px rgba(0, 0, 0, 0.5)`,
  marginTop: '10px',
})

export const StyledArrow = styled(HoverCard.Arrow, {
  fill: theme.colors.gray500,
  marginTop: '-10px',
})
