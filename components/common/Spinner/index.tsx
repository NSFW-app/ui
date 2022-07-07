import { CSSProp, keyframes, theme } from 'lib/theme'
import { Box } from 'primitives/Box'

export interface SpinnerProps extends CSSProp {}

const rotation = keyframes({
  '0%': {
    transform: 'rotate(0deg)',
  },
  '100%': {
    transform: 'rotate(360deg)',
  },
})

export const Spinner: React.FC<SpinnerProps> = ({ css = {} }) => {
  return (
    <Box
      data-spinner
      css={{
        width: '16px',
        height: '16px',
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderWidth: '1px',
        borderColor: theme.colors.gray900,
        borderRadius: '100%',
        borderBottomColor: 'transparent',
        display: 'inline-block',
        position: 'relative',
        animation: `${rotation} 1s linear infinite`,
        ...css,
      }}
    />
  )
}
