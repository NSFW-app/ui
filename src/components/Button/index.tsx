import { Children, cloneElement } from 'react'
import { ComponentProps } from '@stitches/react'
import { theme as themeConfig } from 'core/stitches'
import { Spinner } from 'components/Spinner'
import { Button as ButtonPrimitive } from 'primitives/Button'

export interface ButtonProps extends ComponentProps<typeof ButtonPrimitive> {
  loading?: boolean
  disableTab?: boolean
}

export const Button: React.FC<ButtonProps> = ({
  disabled,
  loading,
  type = 'button',
  css = {},
  children,
  onClick,
  form,
  disableTab,
  ...args
}) => {
  const buttonChildren =
    typeof children === 'string'
      ? children
      : // If children are React components then clone them so we can set disabled color
        Children.map(children, (child) =>
          cloneElement(child as JSX.Element, {
            ...(disabled && { color: themeConfig.colors.gray800.value }),
          })
        )

  return (
    <ButtonPrimitive
      type={type}
      disabled={disabled || loading}
      css={{ '& div': { backgroundColor: 'transparent' }, ...css }}
      onClick={(ev) => {
        if (disabled || loading) return
        onClick?.(ev)
      }}
      form={form}
      onKeyDown={(e) => {
        if (e.key === 'Tab' && disableTab) {
          e.preventDefault()
          return false
        }
      }}
      {...args}
    >
      {loading ? <Spinner css={{ marginY: '2px' }} /> : buttonChildren}
    </ButtonPrimitive>
  )
}
