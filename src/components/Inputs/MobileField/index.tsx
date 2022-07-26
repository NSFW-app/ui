import React, { forwardRef, useState } from 'react'
import { globalCss } from '@stitches/react'
import IntlTelInput, {
  CountryData,
  IntlTelInputProps,
} from 'react-intl-tel-input'
import 'react-intl-tel-input/dist/main.css'
import { Control, Controller, FieldValues } from 'react-hook-form'
import {
  inputBaseStyles,
  inputDisabledStyles,
  inputFocusStyles,
  inputHoverStyles,
} from 'primitives/Input'
import { Text } from 'primitives/Text'
import { TextFieldProps } from 'components/Inputs/TextField'
import { FieldError } from 'components/Inputs/FieldError'
import { CSS, theme } from 'core/stitches'
import { hasStringValue } from 'utils'
import { MobileFieldContainer } from './MobileFieldContainer'

export interface MobileFieldProps extends Partial<IntlTelInputProps> {
  control: Control<FieldValues, object>
  dropdownCss?: CSS
  inputCss?: CSS
  css?: CSS
  placeholder?: TextFieldProps['placeholder']
  error?: boolean | string
  disableTab?: boolean
  dialCode?: boolean
}

export type MobileNumberChangeProps = {
  isValid: boolean
  value: string
  selectedCountryData: CountryData
  fullNumber: string
  extension: string
  event?: React.FocusEvent<HTMLInputElement, Element>
}

export const removeDialCode = (
  dialCode: string,
  phoneNumber: string
): string => {
  return (phoneNumber || '').replace(`+${dialCode}`, '')
}

const globalStyles = globalCss({
  '.intl-tel-input': {
    width: '100%',

    '&.allow-dropdown': {
      'div.selected-flag': {
        position: 'absolute',
        right: '0px',
        width: '70px',
      },

      'input, input[type=text], input[type=tel]': {
        lineHeight: '20px',
        paddingRight: '70px !important',
        width: '100%',
        position: 'relative',
        bottom: '-1px',
        ...inputBaseStyles,
        '&:hover': inputHoverStyles,
        '&:disabled': inputDisabledStyles,
        '&:focus': inputFocusStyles,
      },
    },

    '.flag-container': {
      '.arrow': {
        width: '24px',
        height: '24px',
        backgroundImage: `url(images/down-arrow.png)`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        marginLeft: '4px',
        pointerEvents: 'none',

        '&::after': {
          content: '"" !important',
        },
      },
    },

    '.country-list': {
      backgroundColor: `${theme.colors.gray400} !important`,
      width: '100%',
      border: `none !important`,
      top: '72px',
      borderRadius: '8px',
      overflowX: 'hidden',

      '&::-webkit-scrollbar': {
        width: '5px',
      },

      '&::-webkit-scrollbar-thumb': {
        backgroundColor: theme.colors.gray600,
      },

      '.country': {
        backgroundColor: `${theme.colors.gray400} !important`,
        borderBottom: `1px solid ${theme.colors.gray600}`,
        borderImageWidth: '0',
        padding: '18px 16px !important',

        '&.highlight': {
          backgroundColor: `${theme.colors.gray600} !important`,
        },

        '.country-name': {
          fontSize: '14px',
          lineHeight: '20px',
          color: theme.colors.gray900,
        },
      },

      '.divider': {
        display: 'none',
      },
    },
  },
  '.iti-mobile': {
    '.intl-tel-input': {
      '&.iti-container': {
        top: '50% !important',
        left: '30px',
        right: '30px',
        bottom: 'none',
        width: 'calc(100% - 60px) !important',
        height: '480px',
        marginTop: '-240px',
        zIndex: `${theme.zIndices.modal} !important`,

        '.country-list': {
          top: '0px',
        },
      },
    },
  },
})

export const MobileField = forwardRef<HTMLDivElement, MobileFieldProps>(
  (
    {
      placeholder = '',
      inputCss = {},
      dropdownCss = {},
      css = {},
      error,
      disabled,
      control,
      onPhoneNumberBlur,
      onPhoneNumberChange,
      onSelectFlag,
      disableTab,
      dialCode,
    },
    ref
  ) => {
    globalStyles()
    const [selectedDialCode, setSelectedDialCode] = useState<string>('1')

    return (
      <Controller
        control={control}
        name='mobileNumber'
        render={({ field: { onChange, onBlur, ...fieldArgs } }) => {
          const displayValue = dialCode
            ? fieldArgs.value?.value
            : removeDialCode(selectedDialCode, fieldArgs.value?.value)

          return (
            <MobileFieldContainer
              {...fieldArgs}
              ref={ref}
              css={css}
              error={error}
              disabled={disabled}
              // Using named props for css here to abstract away the need to care about the complex
              // css selectors to styles these elements.
              dropdownCss={dropdownCss}
              inputCss={{
                paddingLeft: `${selectedDialCode.length * 8 + 30}px !important`,
                ...inputCss,
              }}
            >
              <Text
                type='body2'
                error={!!error}
                css={{
                  position: 'absolute',
                  top: '20px',
                  zIndex: 1,
                  left: '16px',
                }}
              >
                +{selectedDialCode}
              </Text>
              <IntlTelInput
                value={displayValue}
                telInputProps={{
                  onKeyDown: (e) => {
                    if (e.key === 'Tab' && disableTab) {
                      e.preventDefault()
                      return false
                    }
                  },
                }}
                placeholder={placeholder}
                disabled={disabled}
                preferredCountries={['gb', 'us', 'fr', 'de', 'au']}
                defaultCountry='us'
                onSelectFlag={(_, selectedCountryData, fullNumber, isValid) => {
                  if (selectedCountryData.dialCode) {
                    setSelectedDialCode(selectedCountryData.dialCode)
                  }
                  fieldArgs.value &&
                    onChange({
                      ...fieldArgs.value,
                      isValid,
                      selectedCountryData,
                      fullNumber,
                    })
                  onSelectFlag &&
                    onSelectFlag(_, selectedCountryData, fullNumber, isValid)
                }}
                onPhoneNumberBlur={(
                  isValid,
                  value,
                  selecteCountryData,
                  fullNumber,
                  extension,
                  event
                ) => {
                  onBlur()
                  if (onPhoneNumberBlur) {
                    onPhoneNumberBlur(
                      isValid,
                      value,
                      selecteCountryData,
                      fullNumber,
                      extension,
                      event
                    )
                  }
                }}
                onPhoneNumberChange={(
                  isValid,
                  value,
                  selectedCountryData,
                  fullNumber,
                  extension
                ) => {
                  onChange({
                    isValid,
                    value,
                    selectedCountryData,
                    fullNumber,
                    extension,
                  })
                  if (onPhoneNumberChange) {
                    onPhoneNumberChange(
                      isValid,
                      value,
                      selectedCountryData,
                      fullNumber,
                      extension
                    )
                  }
                }}
              />
              {hasStringValue(error) && <FieldError>{error}</FieldError>}
            </MobileFieldContainer>
          )
        }}
      />
    )
  }
)

MobileField.displayName = 'MobileField'
