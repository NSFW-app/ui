import { globalCss } from '@stitches/react'
import { DatePickerStylesNames, CalendarBaseStylesNames } from '@mantine/dates'
import { CSSObject } from '@mantine/core'
import { theme } from 'lib/theme'

const primarySelectableCss = {
  color: `${theme.colors.gray900.value}`,
  ':not(:disabled)': {
    color: `${theme.colors.gray900.value} !important`,
  },
  ':active': {
    backgroundColor: `${theme.colors.voilet100.value} !important`,
  },
  ':hover': {
    backgroundColor: `${theme.colors.gray700.value} !important`,
  },
  ':disabled': {
    color: `${theme.colors.gray600.value} !important`,
  },
}

export const datePickerGlobalStyles = globalCss({
  // No modal style seems to be exported from styles
  // https://mantine.dev/dates/date-picker/?t=styles
  '.mantine-Modal-modal': { background: theme.colors.gray400.value },
})

export const sharedCalendarStyles = {
  calendarBase: { width: '100%' },
  calendarHeader: { background: theme.colors.gray400.value },
  calendarHeaderControl: {
    ...primarySelectableCss,
  },
  calendarHeaderLevel: {
    ...primarySelectableCss,
    '&:disabled': {
      color: theme.colors.gray900.value,
      ':hover': {
        background: 'transparent !important',
      },
    },
  },
  calendarHeaderLevelIcon: { background: 'transparent' },
  monthPickerControl: {
    ...primarySelectableCss,
  },
  monthPickerControlActive: {
    background: theme.colors.voilet100.value,
    '&:hover': {
      backgroundColor: `${theme.colors.voilet100.value} !important`,
    },
  },
  yearPickerControl: {
    ...primarySelectableCss,
  },
  yearPickerControlActive: {
    background: theme.colors.voilet100.value,
  },
  weekdayCell: { color: theme.colors.gray900.value },
  weekday: {
    color: `${theme.colors.gray800.value} !important`,
  },
  weekend: {
    ...primarySelectableCss,
  },
  day: {
    '&:disabled': {
      color: `${theme.colors.gray600.value} !important`,
    },
    ...primarySelectableCss,
  },
  selected: {
    '&:not(:disabled)': {
      backgroundColor: `${theme.colors.voilet100.value} !important`,
    },
    '&:focus': {
      outline: `2px solid ${theme.colors.voilet200.value} !important`,
    },
  },
  cell: { color: theme.colors.gray900.value },
}

export const datePickerStyles: Partial<
  Record<DatePickerStylesNames, CSSObject>
> = {
  input: {
    fontSize: '16px',
    transition: 'background-color 200ms ease, opacity 200ms ease',
    backgroundColor: theme.colors.gray400.value,
    height: '56px',
    border: '1px solid transparent',
    borderRadius: '8px',
    color: theme.colors.gray900.value,
    fontFamily: theme.fonts.primary.value,
    boxShadow: 'none',
    boxSizing: 'border-box',
    marginBottom: '20px',
    '&:focus': {
      outline: 0,
      boxShadow: `0 0 4px ${theme.colors.voilet100.value}`,
      border: `1px solid ${theme.colors.voilet100.value}`,
      caretColor: theme.colors.voilet100.value,
    },
    '&:disabled': {
      backgroundColor: theme.colors.gray100.value,
      border: `1px solid ${theme.colors.gray500.value}`,
    },
  },
  dropdownWrapper: { background: theme.colors.gray400.value },
  dropdown: {
    background: theme.colors.gray400.value,
    border: 'none',
  },
  arrow: {
    background: theme.colors.gray400.value,
    borderColor: theme.colors.gray400.value,
  },
  rightSection: {
    paddingRight: '2px',
    width: 'unset',
  },
  ...sharedCalendarStyles,
}

export const calendarStyles: Partial<
  Record<CalendarBaseStylesNames, CSSObject>
> = {
  ...sharedCalendarStyles,
}
