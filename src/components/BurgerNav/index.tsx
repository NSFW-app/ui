import { Target, useDrag, useGesture } from '@use-gesture/react'
import { Drawer } from '@mantine/core'
import { CSS, styled, theme } from 'core/stitches'
import { Flex } from 'primitives/Flex'
import { useEffect } from 'react'

// The xAxis "edge" that will disable the default touchstart event
const MOBILE_NAV_GESTURE_EDGE = 25
// The height of Mobile Navigation bar
const MOBILE_TOP_NAV_HEIGHT = 56

const BurgerMainContainer = styled(Flex, {
  flexDirection: 'row',
  position: 'absolute',
  padding: '0 25px 50px 30px ',
  bottom: 0,
  justifyContent: 'space-between',
  width: '100%',
  alignItems: 'flex-end',
})

export const BurgerRightMenuItems = styled(Flex, {
  flexDirection: 'column',
  gap: '20px',
  p: { fontSize: '1.525em' },
  a: { alignItems: 'flex-end', fontSize: '1.525em' },
})

interface BurgerMenuProps {
  opened: boolean
  onClose: () => void
  onOpen: () => void
  css?: CSS
  appContainerRef: React.MutableRefObject<HTMLElement | undefined>
}

export const BurgerMenu: React.FC<BurgerMenuProps> = ({
  opened,
  children,
  onClose,
  onOpen,
  appContainerRef,
  css,
}) => {
  useEffect(() => {
    if (!appContainerRef.current) {
      appContainerRef.current = window.document.querySelector('#__next') as
        | HTMLElement
        | undefined
    }

    const handleNativeGesture = (e: any) => {
      // is not near **right** edge of view, or the menu is opened, exit
      if (
        !e.pageX ||
        e.pageX < window.innerWidth - MOBILE_NAV_GESTURE_EDGE ||
        opened
      ) {
        return
      }
      // prevent swipe to navigate back gesture
      e.preventDefault()
    }

    // Note, disabling the event via use-gesture onDrag or onDragStart does not seem to work..
    // defining native event to handle this.
    appContainerRef.current?.addEventListener('touchstart', handleNativeGesture)
    return () => {
      appContainerRef.current?.removeEventListener(
        'touchstart',
        handleNativeGesture
      )
    }
  }, [appContainerRef, opened])

  useGesture(
    {
      onDrag: ({ initial, movement }) => {
        // is not near right edge of view, or the menu is open, exit
        if (initial[0] >= window.innerWidth - MOBILE_NAV_GESTURE_EDGE) {
          if (movement[0] < -15) {
            onOpen()
          }
        }
      },
    },
    { eventOptions: { capture: true }, target: appContainerRef as Target }
  )

  const bindDrag = useDrag(({ movement }) => {
    if (movement[0] > 50) {
      onClose()
    }
  })
  return (
    <Drawer
      {...bindDrag()}
      opened={opened}
      onClose={() => onClose()}
      withOverlay={false}
      trapFocus={false}
      padding='xl'
      size='100%'
      position='right'
      zIndex={Number(theme.zIndices.modal.value)}
      sx={() => ({
        '.mantine-Drawer-drawer': {
          backgroundColor: theme.colors.gray100.value,
          padding: '0',
          display: 'flex',
          flexDirection: 'column',
          //Lower down the drawer so the Mobile Top Nav can be seen
          top: `${MOBILE_TOP_NAV_HEIGHT}px`,
        },
        '.mantine-Drawer-closeButton': {
          margin: '16px',
          height: '28px',
          width: '28px',
          svg: {
            height: '28px',
            width: '28px',
          },
        },
        '.mantine-Drawer-header': {
          display: 'none',
        },
      })}
    >
      <BurgerMainContainer css={css}>{children}</BurgerMainContainer>
    </Drawer>
  )
}
