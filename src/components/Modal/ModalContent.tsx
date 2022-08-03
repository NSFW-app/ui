import { ComponentProps } from 'core/stitches'
import { Flex } from 'primitives/Flex'

// This is the full screen variation of ModalContentDialog.
export const ModalContent = ({
  children,
  css,
  ...args
}: ComponentProps<typeof Flex>) => (
  <Flex
    css={{
      backgroundColor: '$gray100',
      position: 'fixed',
      flexDirection: 'column',
      padding: '16px',
      width: '100%',
      height: '100%',
      ...css,
      '@lg': {
        padding: '32px',
        ...css?.['@lg'],
      },
    }}
    {...args}
  >
    {children}
  </Flex>
)
