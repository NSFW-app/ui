import { useSpring } from '@react-spring/web'
import { useDrag } from '@use-gesture/react'
import { styled, theme } from 'core/stitches'
import { Modal, ModalProps } from 'components/Modal'
import { Box } from 'primitives/Box'
import { Flex } from 'primitives/Flex'

const PopupDialogModalContainer = styled(Box, {})

export interface PopupDialogProps extends Omit<ModalProps, 'onClose'> {
  onIgnore: () => void
}

export const PopupDialog: React.FC<PopupDialogProps> = ({
  onIgnore,
  children,
  isOpen,
  css,
  ...props
}) => {
  const [{ y }, api] = useSpring(() => ({ y: 0 }))

  const bind = useDrag(({ active, down, movement: [mx, my] }) => {
    if (my > 30 && onIgnore && !active) {
      onIgnore()
      api.stop()
    }
    api.start({ y: down && my > 0 ? my : 0 })
  })

  return (
    <Modal
      isOpen={isOpen}
      onBackgroundClick={onIgnore}
      css={{
        '@lg': {
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
          width: '100%',
        },
      }}
      {...props}
    >
      <PopupDialogModalContainer
        css={{
          position: 'absolute',
          width: '100%',
          bottom: '0',
          ...css,
          '@lg': {
            position: 'static',
            width: 'auto',
            bottom: 'unset',
            ...css?.['@lg'],
          },
        }}
        style={{ y, touchAction: 'none' }}
      >
        <Flex
          css={{
            position: 'absolute',
            top: '0',
            flexDirection: 'column',
            alignItems: 'center',
            height: '36px',
            width: '100%',
            cursor: 'pointer',
            '@lg': { display: 'none' },
          }}
          {...bind()}
        >
          <Box
            css={{
              backgroundColor: theme.colors.gray700,
              height: '4px',
              width: '32px',
              margin: '8px auto',
              borderRadius: '2px',
            }}
          />
        </Flex>
        {children}
      </PopupDialogModalContainer>
    </Modal>
  )
}
