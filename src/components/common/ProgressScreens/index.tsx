import { theme } from 'core/stitches'
import { ComponentProps } from '@stitches/react'
import { Flex } from 'primitives/Flex'
import { Box } from 'primitives/Box'
import React, { Children, ReactElement, useEffect, useState } from 'react'
import { Dot } from 'common/Dot'
import { useSpring } from '@react-spring/web'
import { useDrag } from '@use-gesture/react'

const SCREEN_MOVEMENT_TRANSITION_DURATION = 900
const SCREEN_OPACITY_TRANSITION_DURATION = 500

export interface ProgressScreensProps extends ComponentProps<typeof Flex> {
  activeIndex: number
  showDotsOnLastScreen?: boolean
  showDots?: boolean
  // Default ProgressScreens are the height of the largest screen, keeping a consistent top position.
  // If set to false, the screens will each be the height of their content, and grow/shrink
  // vertically on transition.
  fixedContentHeight?: boolean
  minHeight?: string
  onSwipeLeft?: () => void
  onSwipeRight?: () => void
}

export interface ProgressScreen {
  isActive?: boolean
  isAnimating?: boolean
}

export const ProgressScreens: React.FC<ProgressScreensProps> = ({
  activeIndex,
  showDotsOnLastScreen = true,
  showDots = false,
  fixedContentHeight = true,
  minHeight = '344px',
  children,
  css,
  onSwipeLeft,
  onSwipeRight,
  ...props
}) => {
  const [internalActiveIndex, setInternalActiveIndex] = useState<number>(
    activeIndex
  )
  const [isAnimating, setIsAnimating] = useState<boolean>(false)
  // Note if touch is enabled, progress screens content cannot be scrollable (touchAction: 'none')
  const touchEnabled = onSwipeLeft || onSwipeRight

  useEffect(() => {
    window.scrollTo(0, 0)
    setIsAnimating(true)
    setInternalActiveIndex(activeIndex)
    const timeout = setTimeout(() => {
      setIsAnimating(false)
    }, SCREEN_OPACITY_TRANSITION_DURATION + 150)
    return () => clearTimeout(timeout)
  }, [activeIndex])

  const numChildren = Children.count(children)

  const [{ x }, api] = useSpring(() => ({ x: 0 }))

  const bind = useDrag(({ active, down, movement: [mx, my] }) => {
    if (mx > 100 && !active && activeIndex > 0) {
      onSwipeLeft?.()
    }
    if (mx < -100 && !active && activeIndex < numChildren - 1) {
      onSwipeRight?.()
    }
    if (onSwipeLeft && onSwipeRight) {
      api.start({ x: down ? mx : 0 })
    }
  })

  return (
    <Flex
      column
      fullWidth
      css={{
        justifyContent: 'center',
        position: 'relative',
        height: '95%',
        ...css,
      }}
      {...props}
    >
      <Flex
        column
        css={{
          borderRadius: '8px',
          overflowX: 'hidden',
          minHeight: minHeight,
          height: '100%',
        }}
      >
        <Flex
          fullWidth
          css={{
            position: 'relative',
            left: `-${internalActiveIndex * 100}%`,
            transition: `all ${SCREEN_MOVEMENT_TRANSITION_DURATION}ms ${theme.transitions.easeOutExpo}`,
            height: '100%',
          }}
        >
          {Children.map(children, (child, i) => (
            <Box
              style={touchEnabled ? { x, touchAction: 'none' } : {}}
              {...(touchEnabled ? bind() : {})}
              css={{
                opacity: internalActiveIndex === i ? '1' : '0',
                transition: `opacity ${SCREEN_OPACITY_TRANSITION_DURATION}ms ${theme.transitions.easeOutExpo}`,
                width: '100%',
                height: '100%',
                minWidth: '100%',
                maxWidth: '100%',
                overflowX: 'hidden',
                ...(!fixedContentHeight
                  ? { height: internalActiveIndex === i ? '100%' : '0' }
                  : {}),
              }}
            >
              {React.cloneElement(child as ReactElement, {
                isActive: internalActiveIndex === i,
                isAnimating,
              })}
            </Box>
          ))}
        </Flex>
      </Flex>
      {showDots && (
        <Flex
          center
          css={{
            width: '100%',
            margin: '36px auto',
            borderRadius: '5px',
            visibility:
              internalActiveIndex === numChildren - 1 &&
              showDotsOnLastScreen === false
                ? 'hidden'
                : 'visible',
            '@sm': {
              bottom: '-56px',
            },
          }}
        >
          {[...Array(numChildren)].map((_, i) => (
            <Dot key={i} active={i <= internalActiveIndex} />
          ))}
        </Flex>
      )}
    </Flex>
  )
}
