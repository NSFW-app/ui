import { CSS, styled } from 'core/stitches'
import { Box } from 'primitives/Box'

export interface DrawerProps {
  opened: boolean
  css?: CSS
}

const StyledDrawer = styled(Box, {
  position: 'fixed',
  top: '0',
  bottom: '0',
  right: '-100%',
  width: '100%',
  height: '100%',
  transition: 'all 300ms ease-in',
  variants: {
    opened: {
      true: {
        right: '0',
      },
    },
  },
})

export const Drawer: React.FC<DrawerProps> = ({
  opened,
  css = {},
  children,
}) => {
  return (
    <StyledDrawer opened={opened} css={css}>
      {children}
    </StyledDrawer>
  )
}
