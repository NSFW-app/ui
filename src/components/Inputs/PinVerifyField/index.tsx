import React, { useState, useRef, forwardRef } from 'react'
import { Control, Controller, FieldValues } from 'react-hook-form'
import { useFocusWithin } from '@react-aria/interactions'
import { styled } from 'core/stitches'
import { theme } from 'core/stitches'
import { hasStringValue } from 'utils'
import { Flex } from 'primitives/Flex'
import { Input, inputFocusStyles } from 'primitives/Input'
import { FieldContainer, TextFieldProps } from 'components/Inputs/TextField'
import { FieldError } from 'components/Inputs/FieldError'

export interface PinVerifyFieldProps extends TextFieldProps {
  length?: number
  control: Control<FieldValues, object>
  onPinChange?: (pin: string) => void
  onEnter?: (pin: string) => void
  onPinBlur?: (pin: string) => void
}

const NumberInputWrapper = styled(Flex, {
  position: 'absolute',
  justifyContent: 'center',
  backgroundColor: `${theme.colors.gray400} !important`,
  width: '100%',
  height: '100%',
  borderRadius: '8px',
  border: '1px solid transparent',
  overflow: 'hidden',
  transition: 'all 100ms ease-in !important',
  '&:hover': {
    backgroundColor: `${theme.colors.gray500} !important`,
    borderColor: theme.colors.gray600,
  },
  '&:focus-within': {
    ...inputFocusStyles,
  },
  variants: {
    error: {
      true: {
        borderColor: `${theme.colors.red100} !important`,
        boxShadow: 'none !important',
      },
    },
    withErrorMsg: {
      true: {
        borderBottomLeftRadius: '0px',
        borderBottomRightRadius: '0px',
      },
    },
    disabled: {
      true: {
        backgroundColor: `${theme.colors.gray100} !important`,
        borderColor: `${theme.colors.gray400}`,
        '&:hover': {
          '&::placeholder': {
            color: `${theme.colors.gray800} !important`,
          },
        },
      },
    },
  },
})

const NumberInput = styled(Input, {
  position: 'relative',
  backgroundColor: 'transparent !important',
  width: '36px !important',
  border: 'none !important',
  borderRadius: '0px !important',
  color: `${theme.colors.gray800} !important`,
  textAlign: 'center',
  '&:hover': {
    backgroundColor: `transparent`,
    border: 'none !important',
  },
  '&:focus': {
    border: `none !important`,
    boxShadow: 'none !important',
    color: `${theme.colors.gray900} !important`,
    outline: 0,
  },
  '&:disabled': {
    color: `${theme.colors.gray400} !important`,
    '&::placeholder': {
      color: `${theme.colors.gray400} !important`,
    },
  },
  variants: {
    error: {
      true: {
        color: theme.colors.red100,
        caretColor: `${theme.colors.red100} !important`,
        '&::placeholder': {
          color: theme.colors.red100,
        },
      },
    },
  },
})

export const PinVerifyField = forwardRef<HTMLDivElement, PinVerifyFieldProps>(
  (
    {
      control,
      css,
      disabled,
      error,
      length = 4,
      onPinChange,
      onEnter,
      onPinBlur,
      ...args
    },
    ref
  ) => {
    const [validationCode, setValidationCode] = useState(
      [...Array(length)].map(() => '')
    )
    const inputRefs = useRef<HTMLInputElement[]>([])
    const { focusWithinProps } = useFocusWithin({
      onFocusWithin: () => {
        for (let i = 0; i < inputRefs.current.length; i++) {
          if (!validationCode[i]) {
            focusInput(i)
            break
          }
        }
      },
    })

    const createInputValue = (value: string) =>
      value.replace(/[^0-9]/g, '').substring(0, 1)

    const focusInput = (index: number) => {
      const input = inputRefs.current[index]
      if (input) {
        input.focus()
      }
    }

    const updateValidationCode = (value: string, index: number) => {
      const newCode = [...validationCode]
      newCode[index] = value
      setValidationCode(newCode)
      return newCode
    }

    return (
      <Controller
        control={control}
        name='verificationInput'
        render={({ field: { onChange, ...fieldArgs } }) => (
          <FieldContainer
            ref={ref}
            fieldError={hasStringValue(error)}
            onBlurCapture={({ relatedTarget }) => {
              if (!relatedTarget && onPinBlur) {
                onPinBlur(validationCode.join(''))
              }
            }}
          >
            <Input
              {...args}
              {...fieldArgs}
              onChange={(e) => {
                onChange(e)
                if (onPinChange) {
                  // TODO: fix type error here (event is not a string)
                  // @ts-expect-error FIXME
                  onPinChange(e)
                }
              }}
              css={{
                position: 'relative',
                marginBottom: '0px',
                opacity: 0,
                ...css,
              }}
            />
            <NumberInputWrapper
              {...focusWithinProps}
              error={!!error}
              disabled={disabled}
              withErrorMsg={hasStringValue(error)}
            >
              {[...Array(4)].map((_, i) => (
                <NumberInput
                  key={`number_input_${i}`}
                  type='number'
                  placeholder='•'
                  plain
                  error={!!error}
                  disabled={disabled}
                  value={validationCode[i]}
                  onKeyDown={(e) => {
                    const { currentTarget, key } = e
                    if (i === 3 && key === 'Enter' && onEnter) {
                      return onEnter(validationCode.join(''))
                    }
                    if (key === 'Backspace' || key === 'Delete') {
                      // Handle input value delete
                      currentTarget.value = ''
                      const newCode = updateValidationCode('', i)
                      onChange(newCode.join(''))
                      if (onPinChange) {
                        onPinChange(newCode.join(''))
                      }
                      focusInput(i - 1)
                      return e.preventDefault()
                    }
                    if (currentTarget.value) {
                      // Prevent user from entering more than 1 char in each input
                      e.preventDefault()
                      return focusInput(i + 1)
                    }
                    if (key === 'e' || key === '-' || key === '.') {
                      // Prevent user from entering the above non numerical chars
                      return e.preventDefault()
                    }
                  }}
                  onChange={({ target }) => {
                    // Handle input value add
                    const value = createInputValue(target.value)
                    const newCode = updateValidationCode(value, i)
                    onChange(newCode.join(''))
                    if (onPinChange) {
                      onPinChange(newCode.join(''))
                    }
                    if (value) {
                      return focusInput(i + 1)
                    }
                  }}
                  ref={(el: HTMLInputElement) => (inputRefs.current[i] = el)}
                />
              ))}
            </NumberInputWrapper>
            {hasStringValue(error) && <FieldError>{error}</FieldError>}
          </FieldContainer>
        )}
      />
    )
  }
)

PinVerifyField.displayName = 'PinVerifyField'
