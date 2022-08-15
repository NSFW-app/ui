import { ComponentProps } from '@stitches/react'
import { useOnKeyDown } from 'hooks/useOnKeyDown'
import { utils, styled, theme } from 'core/stitches'
import { Flex } from 'primitives/Flex'
import {
  cloneElement,
  useEffect,
  useRef,
  Children,
  isValidElement,
} from 'react'
import {
  DEFAULT_MODAL_ANIMATIONS,
  ModalAnimation,
  isTransitionProps,
} from './animations'
import { animated, Transition } from '@react-spring/web'
import { ModalPortal } from './ModalPortal'

const ModalContainer = styled(animated.div, {
  position: 'fixed',
  overflow: 'auto',
  right: '0px',
  left: '0px',
  opacity: 0,
  height: '100%',
  minWidth: '100%',
  maxWidth: '100%',
  width: '100%',
  zIndex: '$modal',
  backgroundColor: 'transparent',
  '@lg': {
    backgroundColor: utils.setColorOpacity(theme.colors.gray100, 0.5),
  },
  variants: {
    backdrop: {
      blurred: {
        backdropFilter: 'blur(1px)',
      },
    },
  },
})

export interface ModalProps extends ComponentProps<typeof ModalContainer> {
  animation?: ModalAnimation
  isOpen?: boolean
  onBackgroundClick?: () => void
}

export const Modal: React.FC<ModalProps> = ({
  children,
  css,
  animation = 'fadeBottomToTop',
  isOpen,
  onBackgroundClick,
  style,
  ...props
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const selectedAnimation = isTransitionProps(animation)
    ? animation
    : DEFAULT_MODAL_ANIMATIONS[animation]

  useOnKeyDown({
    key: 'Escape',
    action: () => {
      if (isOpen) {
        onBackgroundClick?.()
      }
    },
  })

  useEffect(() => {
    const body = document.body
    if (body) {
      body.style.overflowY = isOpen ? 'hidden' : 'auto'
    }
  }, [isOpen])

  return (
    <ModalPortal>
      <Transition items={isOpen} {...selectedAnimation}>
        {(styles, show) =>
          show && (
            <ModalContainer
              ref={containerRef}
              className='ModalContainer'
              onClick={() => {
                onBackgroundClick?.()
              }}
              css={css}
              style={{ ...style, ...styles }}
              {...props}
            >
              {Children.map(children, (child) => {
                return isValidElement(child)
                  ? cloneElement(child, {
                      ...child.props,
                      onClick: (ev: MouseEvent) => {
                        ev.stopPropagation()
                        child.props.onClick?.(ev)
                      },
                    })
                  : child
              })}
            </ModalContainer>
          )
        }
      </Transition>
    </ModalPortal>
  )
}
