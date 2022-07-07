import { ComponentProps } from '@stitches/react'
import { theme } from 'lib/theme'
import { Box } from 'primitives/Box'

export interface LoadingBarProps extends ComponentProps<typeof Box> {
  percent: number
}

export const LoadingBar: React.FC<LoadingBarProps> = ({ percent, css }) => {
  return (
    <Box
      css={{
        position: 'relative',
        overflow: 'hidden',
        height: '4px',
        borderRadius: '2px',
        backgroundColor: theme.colors.gray400,
        ...css,
      }}
    >
      <Box
        css={{
          position: 'absolute',
          backgroundColor: theme.colors.voilet100,
          height: '100%',
          width: `${percent}%`,
          transition: 'width 200ms ease',
        }}
      />
    </Box>
  )
}
