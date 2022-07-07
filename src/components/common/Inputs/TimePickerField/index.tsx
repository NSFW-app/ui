import React from 'react'
import { FieldError } from 'common/Inputs/FieldError'
import { hasStringValue, isValidTime } from 'utils'
import { FieldContainer, TextFieldProps } from 'common/Inputs/TextField'
import { Controller, FieldValues, FieldPath, Control } from 'react-hook-form'
import { TextFieldInput } from 'common/Inputs/TextField/TextFieldInput'
import { format, add } from 'date-fns'

export interface TimePickerFieldProps<
  TFormValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFormValues> = FieldPath<TFormValues>
> extends Omit<TextFieldProps, 'error' | 'name' | 'onChange' | 'onBlur'> {
  name: TName
  control: Control<TFormValues, object>
  use24h?: boolean
  error?: string | boolean
  validTimeOnly?: boolean
  onTimeChange?: (
    time: string,
    event: React.ChangeEvent<HTMLInputElement>
  ) => void
}

const limit = (origVal: string, max: string) => {
  let val = origVal

  if (val.length === 1 && val[0] > max[0]) {
    val = '0' + val
  }

  if (val.length === 2 && val > max) {
    //this can happen when user paste number
    val = max
  }
  return val
}

const hhIndex: [number, number] = [0, 2]
const mmIndex: [number, number] = [2, 4]
const meridianIndex: [number, number] = [5, 7]
const validMeridiem = ['a', 'am', 'A', 'AM', 'p', 'pm', 'P', 'PM']

const formatTime = (val: string, use24h?: boolean) => {
  const input = val.replace(/\D/g, '')
  const hh = limit(input.substring(...hhIndex), use24h ? '23' : '12')
  const mm = limit(input.substring(...mmIndex), '59')

  const mrd = val.split(' ')[1] || val.substring(...meridianIndex)
  const meridiem = validMeridiem.indexOf(mrd) > -1 ? mrd : ''

  return `${hh}${mm.length ? ':' + mm : ''}${
    !use24h && meridiem.length ? ` ${meridiem}` : ''
  }`
}

// TODO: replace with https://mantine.dev/dates/time-input/
export const TimePickerField = <
  TFormValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFormValues> = FieldPath<TFormValues>
>({
  name,
  control,
  use24h = false,
  type = 'text',
  error = false,
  validTimeOnly = false,
  placeholder = '',
  css = {},
  disabled,
  onTimeChange,
  ...args
}: TimePickerFieldProps<TFormValues, TName>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, ...fieldArgs } }) => {
        return (
          <FieldContainer css={css} fieldError={hasStringValue(error)}>
            <TextFieldInput
              error={hasStringValue(error) ? 'message' : !!error}
              type={type}
              disabled={disabled}
              placeholder={`${format(
                add(new Date(), { hours: 1 }),
                use24h ? 'H:mm' : 'hh:mm aaa'
              )}`}
              {...fieldArgs}
              onChange={(e) => {
                const formatted = formatTime(e.target.value, use24h)
                onChange(formatted)
              }}
              onBlur={(e) => {
                const formatted = formatTime(e.target.value, use24h)
                if (validTimeOnly) {
                  isValidTime(formatted) && onTimeChange?.(formatted, e)
                } else {
                  onTimeChange?.(formatted, e)
                }
                fieldArgs.onBlur?.()
              }}
              {...args}
            />
            {hasStringValue(error) && <FieldError>{error}</FieldError>}
          </FieldContainer>
        )
      }}
    />
  )
}

TimePickerField.displayName = 'TimePickerField'
