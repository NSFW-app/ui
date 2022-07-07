import { theme } from 'core/stitches'
import { Flex } from 'primitives/Flex'
import { Dot } from 'common/Dot'

const DOT_WIDTH = 13
const LIMIT = 11

export const DotsTrack: React.FC<{ index: number; num: number }> = ({
  index,
  num,
}) => {
  const items = [...Array(num)]

  const midPoint = Math.floor(LIMIT / 2)
  const lastPagePosition = items.length - LIMIT

  const leftPosition =
    items.length > LIMIT && index > midPoint
      ? Math.min(index - midPoint, lastPagePosition)
      : 0

  return (
    <Flex
      transparent
      center
      css={{
        position: 'absolute',
        bottom: '20px',
        zIndex: theme.zIndices.foreground,
        overflowX: 'hidden',
        left: '50%',
        transform: 'translate(-50%, 0)',
        width: `calc(${DOT_WIDTH}px * ${Math.min(LIMIT, items.length)})`,
        height: '8px',
        // iOS Safari bugfix for not respecting overflow hidden on position absolute elements.
        '-webkit-mask-image':
          '-webkit-radial-gradient(circle, white 100%, black 100%)',
      }}
    >
      <Flex
        transparent
        center
        className='track'
        css={{
          position: 'absolute',
          left: `-${leftPosition * DOT_WIDTH}px`,
          transition: 'left 350ms ease',
        }}
      >
        {items.map((_, i) => (
          <Dot key={i} active={i === index} />
        ))}
      </Flex>
    </Flex>
  )
}
