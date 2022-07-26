import React, { forwardRef, useState } from 'react'
import { ComponentProps } from '@stitches/react'
import { hasStringValue } from 'utils'
import { FieldError } from 'components/Inputs/FieldError'
import { InputActionField } from 'components/Inputs/InputActionField'
import { TextFieldInput } from 'components/Inputs/TextField/TextFieldInput'
import {
  EyeOpen as EyeOpenIcon,
  EyeClosed as EyeClosedIcon,
} from 'components/Icon'
import { InputActionIcon } from 'components/Inputs/InputActionField/InputActionIcon'
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
