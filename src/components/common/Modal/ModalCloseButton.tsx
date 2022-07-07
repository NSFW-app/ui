import { ComponentProps } from '@stitches/react'
import { Button } from 'common/Button'
import { Icon } from 'common/Icon'

export interface ModalCloseButtonProps extends ComponentProps<typeof Button> {
  onClick?: () => void
}

// note, for a larger ModalCloseButton icon, try passing prop "round" before using "css"
export const ModalCloseButton = ({
  onClick,
  css,
  children,
  ...args
}: ModalCloseButtonProps) => {
  return (
    <Button
      icon
      theme='secondary'
      css={{
        position: 'absolute',
        zIndex: 1,
        top: '16px',
        right: '16px',
        ...css,
        '@lg': {
          top: '32px',
          right: '32px',
          ...css?.['@lg'],
        },
      }}
      onClick={onClick}
      {...args}
    >
      {children ?? <Icon icon='Cross' />}
    </Button>
  )
}
