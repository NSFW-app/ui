import { StylesConfig } from 'react-select'
import omit from 'lodash/omit'
import { theme } from 'lib/theme'
import {
  inputBaseStyles,
  inputDisabledStyles,
  inputFocusStyles,
  inputHoverStyles,
  inputPlaceholderStyles,
} from 'primitives/Input'

export const styles: StylesConfig = {
  option: (provided, { isSelected }) => ({
    color: `${theme.colors.gray900}`,
    cursor: 'pointer',
    borderBottom: `1px solid ${theme.colors.gray600}`,
    backgroundColor: isSelected ? `${theme.colors.gray600}` : 'unset',
    padding: '18px 16px',
    fontSize: '14px',
    lineHeight: '20px',
    '&:last-child': {
      borderBottom: 'none',
    },
    '&:hover, &:hover.selected': {
      backgroundColor: `${theme.colors.gray600}`,
    },
  }),
  container: (args, { isDisabled }) => ({
    ...args,
    ...(isDisabled && { cursor: 'not-allowed', pointerEvents: 'unset' }),
  }),
  control: (provided, { isFocused, isDisabled, selectProps }) => {
    return {
      ...omit(inputBaseStyles, ['backgroundColor', 'color']),
      display: 'flex',
      cursor: 'pointer',
      backgroundColor: `${theme.colors.gray400}`,
      ...(!selectProps['aria-invalid'] &&
        (isFocused
          ? omit(inputFocusStyles, ['caretColor'])
          : {
              '&:not(:disabled):not(:focus):hover': inputHoverStyles,
            })),
      ...(isDisabled && {
        ...omit(inputDisabledStyles, ['backgroundColor', 'color']),
        pointerEvents: 'none',
      }),
      ...(selectProps['aria-invalid'] && {
        borderColor: `${theme.colors.red100}`,
      }),
      ...(selectProps['aria-errormessage'] && {
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
      }),
    }
  },
  placeholder: (args, { selectProps }) => ({
    ...args,
    ...omit(inputPlaceholderStyles, ['color']),
    color: `${theme.colors.gray800}`,
    ...(selectProps['aria-invalid'] && {
      color: `${theme.colors.red100}`,
    }),
  }),
  menu: () => ({
    zIndex: 1,
    position: 'absolute',
    width: '100%',
    backgroundColor: `${theme.colors.gray400}`,
    borderRadius: '8px',
    marginTop: '10px',
    overflow: 'auto',
  }),
  menuList: () => ({
    maxHeight: '200px',
    overflowY: 'auto',
    '&:hover > .selected': {
      backgroundColor: 'unset',
    },
    '&::-webkit-scrollbar': {
      width: '5px',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: `${theme.colors.gray600}`,
    },
  }),
  singleValue: (args, { selectProps }) => ({
    ...args,
    color: theme.colors.gray900.value,
    ...(selectProps['aria-invalid'] && {
      color: `${theme.colors.red100}`,
    }),
  }),
  dropdownIndicator: () => ({ paddingRight: '16px' }),
}
