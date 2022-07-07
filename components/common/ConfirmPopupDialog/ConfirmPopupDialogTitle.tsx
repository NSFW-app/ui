import { ComponentProps } from '@stitches/react'
import { Text } from 'primitives/Text'

export const ConfirmPopupDialogTitle: React.FC<ComponentProps<typeof Text>> = ({
  children,
  css,
  ...props
}) => {
  return (
    <Text
      type='body2'
      css={{
        fontWeight: '600',
        marginBottom: '20px',
        marginTop: '10px',
        '@md': {
          marginTop: '0px',
        },
        ...css,
      }}
      {...props}
    >
      {children}
    </Text>
  )
}
