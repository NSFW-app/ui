import { forwardRef } from 'react'
import { ComponentProps } from '@stitches/react'
import 'react-intl-tel-input/dist/main.css'
import {
  Control,
  Controller,
  FieldValues,
  UseControllerProps,
} from 'react-hook-form'
import { FieldError } from 'components/Inputs/FieldError'
import NumberFormat, { NumberFormatProps } from 'react-number-format'
import { hasStringValue } from 'utils'
import { InputActionField } from 'components/Inputs/InputActionField'
import { TextFieldInput } from 'components/Inputs/TextField/TextFieldInput'
import { Box } from 'primitives/Box'
import { theme } from 'core/stitches'
import { InputActionIcon } from 'components/Inputs/InputActionField/InputActionIcon'
import { Flex } from 'primitives/Flex'

export interface MoneyFieldProps
  extends Omit<NumberFormatProps, 'customInput' | 'error' | 'prefix'> {
  control: Control<FieldValues, object>
  css?: ComponentProps<typeof InputActionField>['css']
  error?: boolean | string
  prefix?: string
  currency?: string
  name?: string
  rules?: UseControllerProps['rules']
}

export const MoneyField = forwardRef<HTMLDivElement, MoneyFieldProps>(
  (
    {
      error = false,
      prefix = '$',
      currency = 'USD',
      name,
      control,
      rules,
      css,
      ...args
    },
    ref
  ) => {
    return (
      <Controller
        name={name || 'money'}
        control={control}
        rules={rules}
        render={({ field: { onChange, value } }) => (
          <InputActionField
            ref={ref}
            error={!!error}
            css={css}
            iconPosition='right'
          >
            <Flex css={{ width: '100%' }}>
              <NumberFormat
                allowNegative={false}
                decimalScale={2}
                thousandSeparator
                prefix={prefix}
                value={value}
                customInput={TextFieldInput}
                onValueChange={(v) => onChange(v.value)}
                error={hasStringValue(error) ? 'message' : !!error}
                {...args}
              />
              <InputActionIcon
                disabled={args.disabled}
                error={hasStringValue(error) ? 'message' : !!error}
                tabIndex={-1}
              >
                <Box
                  css={{
                    borderRadius: '6px',
                    color: theme.colors.gray100,
                    backgroundColor: theme.colors.gray700,
                    padding: '6px 8px',
                    fontSize: '8px',
                    fontWeight: 700,
                  }}
                >
                  {currency}
                </Box>
              </InputActionIcon>
            </Flex>

            {hasStringValue(error) && <FieldError>{error}</FieldError>}
          </InputActionField>
        )}
      />
    )
  }
)

MoneyField.displayName = 'MoneyField'
