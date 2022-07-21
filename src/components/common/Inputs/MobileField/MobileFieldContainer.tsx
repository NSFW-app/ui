import { FieldContainer } from 'common/Inputs/TextField'
import { CSS } from 'core/stitches'
import { ComponentProps, forwardRef } from 'react'
import { hasStringValue } from 'utils'
import { inputErrorStyles } from 'primitives/Input'

interface MobileFieldContainerProps
  extends ComponentProps<typeof FieldContainer> {
  dropdownCss?: CSS
  inputCss?: CSS
  error?: boolean | string
  disabled?: boolean
}

export const MobileFieldContainer = forwardRef<
  HTMLDivElement,
  MobileFieldContainerProps
>(({ css, children, dropdownCss, inputCss, error, disabled, ...args }, ref) => (
  <FieldContainer
    {...args}
    ref={ref}
    fieldError={hasStringValue(error)}
    css={{
      [`& .intl-tel-input.allow-dropdown input, & .intl-tel-input.allow-dropdown input[type=text], & .intl-tel-input.allow-dropdown input[type=tel]`]: {
        ...(error
          ? {
              ...inputErrorStyles,
              ...(hasStringValue(error)
                ? { borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }
                : {}),
            }
          : {}),
        ...inputCss,
      },
      '& input[type="tel"]:focus-visible': {
        border: 'none',
        outline: 'none',
      },
      '& .country-list': {
        ...dropdownCss,
      },
      ...css,
    }}
  >
    {children}
  </FieldContainer>
))
MobileFieldContainer.displayName = 'MobileFieldContainer'
