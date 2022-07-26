import { styled, theme } from 'core/stitches'
import { textBody2Css } from 'primitives/Text'

export const Blockquote = styled('blockquote', {
  ...textBody2Css,
  padding: '12px 4px 12px 32px',
  fontStyle: 'italic',
  color: theme.colors.gray800,
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    width: '4px',
    height: '100%',
    left: 0,
    top: 0,
    borderRadius: '10px',
    backgroundColor: theme.colors.voilet200,
  },
})
