import {
  DatePicker,
  DatePickerProps,
  Calendar,
  CalendarProps,
} from '@mantine/dates'
import { Controller, FieldValues, FieldPath, Control } from 'react-hook-form'
import { InputActionIcon } from 'components/Inputs/InputActionField/InputActionIcon'
import {
  datePickerGlobalStyles,
  datePickerStyles,
  calendarStyles,
} from './styles'

export interface DatePickerFieldProps<
  TFormValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFormValues> = FieldPath<TFormValues>
> {
  name: TName
  control: Control<TFormValues, object>
  datePickerProps?: Partial<DatePickerProps>
  onDatePickerChange?: DatePickerProps['onChange']
  disableTab?: boolean
}

export interface CalendarFieldProps<
  TFormValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFormValues> = FieldPath<TFormValues>
> {
  name: TName
  control: Control<TFormValues, object>
  datePickerProps?: Partial<CalendarProps>
  onDatePickerChange?: CalendarProps['onChange']
  disableTab?: boolean
}

export const CalendarField = <
  TFormValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFormValues> = FieldPath<TFormValues>
>({
  name,
  control,
  datePickerProps,
  onDatePickerChange,
  disableTab,
}: CalendarFieldProps<TFormValues, TName>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, onBlur, value, ref } }) => (
        <Calendar
          fullWidth
          styles={calendarStyles}
          placeholder='Jan 2, 1986'
          value={value as Date}
          onChange={(d) => {
            onChange(d)
            onDatePickerChange?.(d)
          }}
          onBlur={onBlur}
          onKeyDown={(e) => {
            if (e.key === 'Tab' && disableTab) {
              e.preventDefault()
              return false
            }
          }}
          {...datePickerProps}
        />
      )}
    />
  )
}

export const DatePickerField = <
  TFormValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFormValues> = FieldPath<TFormValues>
>({
  name,
  control,
  datePickerProps,
  onDatePickerChange,
  disableTab,
}: DatePickerFieldProps<TFormValues, TName>) => {
  datePickerGlobalStyles()

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, onBlur, value, ref } }) => (
        <DatePicker
          ref={ref}
          styles={datePickerStyles}
          dropdownType='popover'
          placeholder='Jan 2, 1986'
          value={value as Date}
          onChange={(d) => {
            onChange(d)
            onDatePickerChange?.(d)
          }}
          onBlur={onBlur}
          onKeyDown={(e) => {
            if (e.key === 'Tab' && disableTab) {
              e.preventDefault()
              return false
            }
          }}
          rightSection={
            <InputActionIcon
              disabled={!!datePickerProps?.disabled}
              icon='Calendar'
              css={{
                border: 0,
              }}
            />
          }
          {...datePickerProps}
        />
      )}
    />
  )
}
