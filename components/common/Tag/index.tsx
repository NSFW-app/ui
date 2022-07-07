import { styled } from 'lib/theme'
import { theme } from 'lib/theme'

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
