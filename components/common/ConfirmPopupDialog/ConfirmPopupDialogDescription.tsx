import { ComponentProps } from '@stitches/react'
import { theme } from 'lib/theme'
import { Text } from 'primitives/Text'

export const ConfirmPopupDialogDescription: React.FC<
  ComponentProps<typeof Text>
> = ({ children, css, ...props }) => {
  return (
    <Text type='body3' css={{ color: theme.colors.gray800, ...css }} {...props}>
      {children}
    </Text>
  )
}
