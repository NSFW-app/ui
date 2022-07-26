import { add, format } from 'date-fns'
import {
  Controller,
  Control,
  FieldValues,
  useForm,
  useController,
} from 'react-hook-form'
import { toast } from 'react-toastify'
import { CSSProp } from 'core/stitches'
import { Flex } from 'primitives/Flex'
import { SnackBar } from 'components/SnackBar'
import snackBar from 'components/SnackBar/config'
import { CalendarField, CalendarFieldProps } from '../DatePickerField'
import { TimePickerField, TimePickerFieldProps } from '../TimePickerField'

export interface DateTimeFieldProps extends CSSProp {
  control: Control<{ dateTime: Date }, object>
  datePickerProps?: Partial<CalendarFieldProps>
  timePickerProps?: Partial<TimePickerFieldProps>
  onDateInputChange?: CalendarFieldProps['onDatePickerChange']
  onTimeInputChange?: TimePickerFieldProps['onTimeChange']
  onDateTimeChange?: (dateTime: Date) => void
  error?: string | boolean
  disabled?: boolean
}

export const DateTimeField: React.FC<DateTimeFieldProps> = ({
  control,
  datePickerProps,
  timePickerProps,
  onDateInputChange,
  onTimeInputChange,
  onDateTimeChange,
  css = {},
  error,
  disabled,
}) => {
  const {
    field: { value },
  } = useController({ name: 'dateTime', control })

  interface FormValues extends FieldValues {
    dateInput: Date
    timeInput: string
  }

  const { control: innerControl, getValues, setValue } = useForm<FormValues>({
    defaultValues: {
      dateInput: value,
      timeInput: format(value, 'hh:mm aaa'),
    },
  })

  return (
    <Controller
      control={control}
      name='dateTime'
      render={({ field: { onChange, value, ref } }) => (
        <Flex center full column css={css}>
          <CalendarField
            name='dateInput'
            control={innerControl}
            datePickerProps={{
              minDate: new Date(),
            }}
            onDatePickerChange={(val) => {
              const date = format(val ?? new Date(), 'MM/dd/yyyy')
              let time = getValues('timeInput')
              let dateTime = new Date(`${date} ${time}`)
              if (dateTime < new Date()) {
                dateTime = add(new Date(), { hours: 1 })
                time = format(dateTime, 'hh:mm aaa')
                setValue('dateInput', dateTime)
                setValue('timeInput', time)
                toast(
                  () => <SnackBar title='Cannot set a date in the past' />,
                  snackBar
                )
              }
              onChange(dateTime)
              onDateTimeChange?.(dateTime)
              onDateInputChange?.(val)
            }}
          />
          <TimePickerField
            error={error}
            disabled={disabled}
            {...timePickerProps}
            name='timeInput'
            control={innerControl}
            css={{ marginTop: '20px', width: '100%' }}
            validTimeOnly
            onTimeChange={(time, e) => {
              const date = format(getValues('dateInput'), 'MM/dd/yyyy')
              let dateTime = new Date(`${date} ${time}`)
              // Cant be in the past
              if (dateTime < new Date()) {
                dateTime = add(new Date(), { hours: 1 })
                time = format(dateTime, 'hh:mm aaa')
                setValue('timeInput', time)
                toast(
                  () => <SnackBar title='Cannot set a date in the past' />,
                  snackBar
                )
              }
              onChange(dateTime)
              onDateTimeChange?.(dateTime)
              onTimeInputChange?.(time, e)
            }}
          />
        </Flex>
      )}
    />
  )
}
