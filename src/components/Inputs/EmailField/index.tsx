import React, { forwardRef } from 'react'
import { ComponentProps } from '@stitches/react'
import { hasStringValue } from 'utils'
import { Flex } from 'primitives/Flex'
import { Box } from 'primitives/Box'
import { FieldError } from 'components/Inputs/FieldError'
import { InputActionField } from 'components/Inputs/InputActionField'
import { TextFieldInput } from '../TextField/TextFieldInput'
import { InputActionIcon } from '../InputActionField/InputActionIcon'

export interface EmailFieldProps
  extends Omit<ComponentProps<typeof TextFieldInput>, 'error'> {
  validationProps?: ComponentProps<typeof Box>
  error?: string | boolean
  disableTab?: boolean
}

export const EmailField = forwardRef<HTMLInputElement, EmailFieldProps>(
  (
    {
      error = false,
      placeholder,
      disabled,
      onKeyDown,
      disableTab,
      iconPosition,
      css,
      ...args
    },
    ref
  ) => {
    return (
      <InputActionField error={!!error} css={css} iconPosition='right'>
        <Flex css={{ width: '100%' }}>
          <TextFieldInput
            ref={ref}
            error={hasStringValue(error) ? 'message' : !!error}
            type='email'
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
          <InputActionIcon
            disabled={disabled}
            error={hasStringValue(error) ? 'message' : !!error}
            tabIndex={-1}
            icon='Email'
          />
        </Flex>
        {hasStringValue(error) && <FieldError>{error}</FieldError>}
      </InputActionField>
    )
  }
)

EmailField.displayName = 'EmailField'
