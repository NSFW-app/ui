import { styled, theme, ComponentProps } from 'lib/theme'
import { Box } from 'primitives/Box'

// The desktop display of the ModalContentDialog needs a wrapper flex to center it.
const DesktopContainerStyles = styled(Box, {
  height: '100%',
  '@lg': {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    height: '100%',
    width: '100%',
  },
})

export const ModalContentDialog = ({
  children,
  css,
}: ComponentProps<typeof Box>) => (
  <DesktopContainerStyles>
    <Box
      onClick={(ev) => ev.stopPropagation()}
      css={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100%',
        width: '100%',
        padding: '16px',
        boxShadow: theme.shadows.sm,
        ...css,
        '@lg': {
          height: 'auto',
          maxHeight: '100%',
          borderRadius: '8px',
          boxShadow: theme.shadows.lg,
          // Override these as need be
          minHeight: 'auto',
          width: '420px',
          ...css?.['@lg'],
        },
      }}
    >
      {children}
    </Box>
  </DesktopContainerStyles>
)
