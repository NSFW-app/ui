import { styled, theme } from 'lib/theme'
import {
  inputBaseStyles,
  inputDisabledStyles,
  inputErrorStyles,
  inputFocusStyles,
  inputHoverStyles,
  inputPlaceholderStyles,
} from 'primitives/Input'
import { textBody2Css } from 'primitives/Text'

export const TextArea = styled('textarea', {
  ...textBody2Css,
  ...inputBaseStyles,
  fontFamily: theme.fonts.primary,
  width: '100%',
  padding: '19px 16px',
  height: 'auto',
  resize: 'none',
  overflow: 'hidden',
  '&:focus': inputFocusStyles,
  '&:disabled': inputDisabledStyles,
  '&:not(:disabled):not(:focus):hover': inputHoverStyles,
  '&::placeholder': inputPlaceholderStyles,
  variants: {
    error: {
      true: inputErrorStyles,
    },
  },
})
