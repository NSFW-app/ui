import React, { forwardRef } from 'react'
import { ComponentProps } from '@stitches/react'
import { styled } from 'core/stitches'
import { hasStringValue } from 'utils'
import { Flex } from 'primitives/Flex'
import { Box } from 'primitives/Box'
import { FieldError } from 'components/Inputs/FieldError'
import { InputActionField } from 'components/Inputs/InputActionField'
import { TextFieldInput } from 'components/Inputs/TextField/TextFieldInput'

export const FieldContainer = styled(Flex, {
  position: 'relative',
  flexDirection: 'column',
  height: '56px',
  transition: 'margin 300ms ease',
  // Default margin buttom as per form spec on DSv6
  marginBottom: '20px',
  variants: {
    fieldError: {
      true: {
        marginBottom: '40px',
      },
    },
  },
})

export interface TextFieldProps
  extends Omit<ComponentProps<typeof TextFieldInput>, 'error'> {
  validationProps?: ComponentProps<typeof Box>
  error?: string | boolean
  disableTab?: boolean
}

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      type = 'text',
      error = false,
      placeholder,
      disabled,
      onKeyDown,
      disableTab,
      css,
      ...args
    },
    ref
  ) => {
    return (
      <InputActionField error={!!error} css={css}>
        <TextFieldInput
          ref={ref}
          error={hasStringValue(error) ? 'message' : !!error}
          type={type}
          disabled={disabled}
          placeholder={placeholder}
          onKeyDown={(e) => {
            if (onKeyDown) {
              onKeyDown(e)
            }
            if (disableTab && e.key === 'Tab') {
              e.preventDefault()
              return false
            }
          }}
          {...args}
        />
        {hasStringValue(error) && <FieldError>{error}</FieldError>}
      </InputActionField>
    )
  }
)

TextField.displayName = 'TextField'
