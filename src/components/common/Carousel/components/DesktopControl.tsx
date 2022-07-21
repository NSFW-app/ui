import { Flex } from 'primitives/Flex'
import { Button } from 'common/Button'
import { Icon } from 'common/Icon'

export const DesktopControl = ({
  pos,
  show,
  onClick,
}: {
  pos: 'left' | 'right'
  show: boolean
  onClick: () => void
}) => (
  <Flex
    center
    transparent
    css={{
      position: 'absolute',
      transition: 'opacity 125ms ease-in-out',
      opacity: show ? 1 : 0,
      pointerEvents: show ? 'auto' : 'none',
      top: '49%',
      transform: 'translate(0, -49%)',
      [`${pos}`]: '4px',
    }}
  >
    <Button
      icon
      theme='secondary'
      css={{
        opacity: 0.7,
        '&:hover': {
          opacity: 1,
        },
      }}
      onClick={onClick}
    >
      <Icon
        icon='Chevron'
        rotate={pos === 'left' ? 180 : 0}
        css={{
          width: '14px',
          height: '14px',
        }}
      />
    </Button>
  </Flex>
)
