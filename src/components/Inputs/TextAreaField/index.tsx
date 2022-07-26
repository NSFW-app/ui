import React, { forwardRef } from 'react'
import { ComponentProps } from '@stitches/react'
import { Box } from 'primitives/Box'
import { Flex } from 'primitives/Flex'
import { inputErrorStyles } from 'primitives/Input'
import { TextArea } from 'primitives/TextArea'
import { FieldError } from 'components/Inputs/FieldError'
import { styled } from 'core/stitches'
import { hasStringValue } from 'utils'

export const TextAreaFieldContainer = styled(Flex, {
  position: 'relative',
  flexDirection: 'column',
  transition: 'margin 300ms ease',
  marginBottom: '20px',
  variants: {
    fieldError: {
      true: {
        marginBottom: '40px',
      },
    },
  },
})

export const TextAreaFieldInput = styled(TextArea, {
  marginBottom: '0px',
  resize: 'none',
  padding: '17px 16px',
  variants: {
    resizable: {
      true: {
        resize: 'vertical !important',
      },
    },
    error: {
      true: inputErrorStyles,
      message: {
        ...inputErrorStyles,
        borderBottomRightRadius: '0px',
        borderBottomLeftRadius: '0px',
      },
    },
  },
})

export interface TextAreaFieldProps
  extends Omit<ComponentProps<typeof TextAreaFieldInput>, 'error'> {
  validationProps?: ComponentProps<typeof Box>
  error?: string | boolean
  disableTab?: boolean
  rows?: number
  resizable?: boolean
}

export const TextAreaField = forwardRef<
  HTMLTextAreaElement,
  TextAreaFieldProps
>(
  (
    {
      error = false,
      placeholder,
      disabled,
      onKeyDown,
      disableTab,
      css,
      rows = 4,
      resizable = false,
      children,
      ...args
    },
    ref
  ) => {
    return (
      <TextAreaFieldContainer
        fieldError={hasStringValue(error)}
        css={{ width: '100%', ...css }}
      >
        <TextAreaFieldInput
          ref={ref}
          error={hasStringValue(error) ? 'message' : !!error}
          placeholder={placeholder}
          disabled={disabled}
          rows={rows}
          resizable={resizable}
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
        {children}
      </TextAreaFieldContainer>
    )
  }
)

TextAreaField.displayName = 'TextAreaField'
