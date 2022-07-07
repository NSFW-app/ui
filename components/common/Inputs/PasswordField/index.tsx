import React, { forwardRef, useState } from 'react'
import { ComponentProps } from '@stitches/react'
import { hasStringValue } from 'lib/helpers'
import { FieldError } from 'common/Inputs/FieldError'
import { InputActionField } from 'common/Inputs/InputActionField'
import { TextFieldInput } from 'common/Inputs/TextField/TextFieldInput'
import { EyeOpen as EyeOpenIcon, EyeClosed as EyeClosedIcon } from 'common/Icon'
import { InputActionIcon } from 'common/Inputs/InputActionField/InputActionIcon'
import { Flex } from 'primitives/Flex'

export interface PasswordFieldProps
  extends Omit<ComponentProps<typeof TextFieldInput>, 'error'> {
  error?: boolean | string
  disableTab?: boolean
}

export const PasswordField = forwardRef<HTMLInputElement, PasswordFieldProps>(
  (
    { placeholder = 'Password', error, disabled, disableTab, css, ...args },
    ref
  ) => {
    const [passwordIsVisible, setPasswordIsVisible] = useState<boolean>(false)

    return (
      <InputActionField error={!!error} css={css} iconPosition='right'>
        <Flex css={{ width: '100%' }}>
          <TextFieldInput
            ref={ref}
            placeholder={placeholder}
            disabled={disabled}
            type={passwordIsVisible ? 'text' : 'password'}
            error={hasStringValue(error) ? 'message' : !!error}
            onKeyDown={(e) => {
              if (e.key === 'Tab' && disableTab) {
                e.preventDefault()
                return false
              }
            }}
            {...args}
          />
          <InputActionIcon
            disabled={disabled}
            error={hasStringValue(error) ? 'message' : !!error}
            onClick={() => setPasswordIsVisible(!passwordIsVisible)}
            tabIndex={-1}
          >
            {passwordIsVisible ? <EyeOpenIcon /> : <EyeClosedIcon />}
          </InputActionIcon>
        </Flex>

        {hasStringValue(error) && <FieldError>{error}</FieldError>}
      </InputActionField>
    )
  }
)

PasswordField.displayName = 'PasswordField'
