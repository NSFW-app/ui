import { ComponentProps } from '@stitches/react'
import { Flex } from 'primitives/Flex'
import { Text } from 'primitives/Text'
import { theme } from 'core/stitches'

export interface FieldErrorProps extends ComponentProps<typeof Flex> {}

export const FieldError: React.FC<FieldErrorProps> = ({ children, css }) => (
  <>
    <Flex fullWidth />
    <Flex
      css={{
        backgroundColor: theme.colors.red100,
        borderBottomRightRadius: '8px',
        borderBottomLeftRadius: '8px',
        alignItems: 'center',
        padding: '2px 16px',
        minHeight: '28px',
        flex: 1,
        ...css,
      }}
    >
      <Text type='caption3'>{children}</Text>
    </Flex>
  </>
)
