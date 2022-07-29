import { ComponentProps, theme } from 'core/stitches'
import { Flex } from 'primitives/Flex'

export const PopupDialogContent = ({
  children,
  css,
  ...args
}: ComponentProps<typeof Flex>) => (
  <Flex
    css={{
      backgroundColor: theme.colors.gray100,
      flexDirection: 'column',
      padding: '32px 16px',
      textAlign: 'center',
      border: `1px solid ${theme.colors.gray400}`,
      borderRadius: '6px',
      boxShadow: theme.shadows.sm,
      ...css,
      '@lg': {
        boxShadow: theme.shadows.lg,
        width: '376px',
        ...css?.['@lg'],
      },
    }}
    {...args}
  >
    {children}
  </Flex>
)
