import { ComponentProps } from '@stitches/react'
import { theme } from 'lib/theme'
import { Box } from 'primitives/Box'

export interface ContainerProps extends ComponentProps<typeof Box> {}

export const Container: React.FC<ContainerProps> = ({ children, css }) => {
  return (
    <Box
      css={{
        maxWidth: theme.container.maxWidth,
        width: '100%',
        margin: '0 auto',
        '@lg': {
          padding: '0px 16px',
        },
        ...css,
      }}
    >
      {children}
    </Box>
  )
}
