import { Children, cloneElement, ReactElement, useState } from 'react'
import { useSpring } from '@react-spring/web'
import { useDrag } from '@use-gesture/react'
import { styled, theme, ComponentProps } from 'lib/theme'
import { Flex } from 'primitives/Flex'
import { Box } from 'primitives/Box'
import { DotsTrack } from './components/DotsTrack'
import { DesktopControl } from './components/DesktopControl'

const SCREEN_MOVEMENT_TRANSITION_DURATION = 900

const SlideWrapper = styled(Box, {
  opacity: '1',
  width: '100%',
  height: '100%',
  minWidth: '100%',
  maxWidth: '100%',
  overflowX: 'hidden',
})

const CarouselContainer = styled(Flex, {
  flexDirection: 'column',
  justifyContent: 'center',
  position: 'relative',
  overflow: 'hidden',
  width: '100%',
})

const CarouselTrack = styled(Flex, {
  position: 'relative',
  height: '100%',
  width: '100%',
})

export interface CarouselProps extends ComponentProps<typeof Flex> {
  touchEnabled?: boolean
  dots?: boolean
  controls?: boolean
  initialIndex?: number
  onSlide?: (index: number) => void
}

export const Carousel: React.FC<CarouselProps> = ({
  children,
  touchEnabled = true,
  dots = true,
  controls = true,
  initialIndex = 0,
  onSlide,
  css,
}) => {
  const numSlides = Children.count(children)
  const [activeIndex, setActiveIndex] = useState(initialIndex)
  const hasPrev = activeIndex > 0
  const hasNext = activeIndex < numSlides - 1

  const [{ x }, api] = useSpring(() => ({ x: 0, y: 0 }))

  const bind = useDrag(({ active, down, movement: [mx, my] }) => {
    if (mx > 100 && !active && hasPrev) {
      handleLeft()
    }
    if (mx < -100 && !active && hasNext) {
      handleRight()
    }
    if (
      // Only apply drag if dragging in a direction where there is a slide.
      (hasPrev && mx > 0) ||
      (hasNext && mx < 0)
    ) {
      api.start({ x: down ? mx : 0 })
    }
  })

  const handleLeft = () => {
    const index = hasPrev ? activeIndex - 1 : activeIndex
    setActiveIndex(index)
    onSlide?.(index)
  }

  const handleRight = () => {
    const index = hasNext ? activeIndex + 1 : activeIndex
    setActiveIndex(index)
    onSlide?.(index)
  }

  return (
    <CarouselContainer css={css}>
      <CarouselTrack
        css={{
          left: `-${activeIndex * 100}%`,
          transition: `left ${SCREEN_MOVEMENT_TRANSITION_DURATION}ms ${theme.transitions.easeOutExpo}`,
        }}
      >
        {Children.map(children, (child, i) => (
          <SlideWrapper
            style={touchEnabled ? { x, touchAction: 'pan-y' } : {}}
            {...(touchEnabled ? bind() : {})}
          >
            {cloneElement(child as ReactElement, {
              isActive: activeIndex === i,
            })}
          </SlideWrapper>
        ))}
      </CarouselTrack>
      {numSlides > 1 && (
        <>
          {controls && !touchEnabled && (
            <>
              <DesktopControl pos='left' show={hasPrev} onClick={handleLeft} />
              <DesktopControl
                pos='right'
                show={hasNext}
                onClick={handleRight}
              />
            </>
          )}
          {dots && <DotsTrack num={numSlides} index={activeIndex} />}
        </>
      )}
    </CarouselContainer>
  )
}
