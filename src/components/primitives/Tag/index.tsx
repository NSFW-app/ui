import { styled } from 'core/stitches'
import { theme } from 'core/stitches'

export const Tag = styled('div', {
  backgroundColor: theme.colors.gray700,
  borderRadius: '6px',
  color: theme.colors.gray100,
  fontSize: '8px',
  fontWeight: 'bold',
  lineHeight: '20px',
  display: 'inline-block',
  padding: '0px 8px',
  textTransform: 'uppercase',
})
