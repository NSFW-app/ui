import { CSS, styled, theme } from 'core/stitches'

export const inputHoverStyles: CSS = {
  border: `1px solid ${theme.colors.gray600}`,
}

export const inputFocusStyles: CSS = {
  outline: 0,
  boxShadow: `0 0 4px ${theme.colors.voilet100}`,
  border: `1px solid ${theme.colors.voilet100}`,
  caretColor: theme.colors.voilet100,
}

export const inputIconLeftFocusStyles: CSS = {
  ...inputFocusStyles,
}

export const inputDisabledStyles: CSS = {
  backgroundColor: theme.colors.gray100,
  border: `1px solid ${theme.colors.gray500}`,
  cursor: 'not-allowed',
  color: theme.colors.gray600,
  '&::placeholder': {
    color: theme.colors.gray400,
  },
}

export const inputErrorStyles: CSS = {
  color: theme.colors.red100,
  borderColor: theme.colors.red100,
  '&::placeholder': {
    color: theme.colors.red100,
  },
  '&:not(:disabled):not(:focus):hover': {
    borderColor: theme.colors.red100,
  },
  '&:focus': {
    color: theme.colors.red100,
    border: `1px solid ${theme.colors.red100}`,
    boxShadow: 'unset',
    caretColor: theme.colors.red100,
  },
}

export const inputLeftIconErrorStyles: CSS = {
  ...inputErrorStyles,
}

export const inputPlaceholderStyles: CSS = {
  transition: 'color 200ms ease',
  color: theme.colors.gray800,
}

export const inputBaseStyles: CSS = {
  transition: 'background-color 200ms ease, opacity 200ms ease',
  backgroundColor: theme.colors.gray400,
  height: '56px',
  border: '1px solid transparent',
  borderRadius: '8px',
  color: theme.colors.gray900,
  fontSize: '16px',
  fontFamily: theme.fonts.primary,
  boxShadow: 'none',
  boxSizing: 'border-box',
}

export const inputCss = {
  width: '100%',
  padding: '19px 16px',
  ...inputBaseStyles,
  '&:focus': inputFocusStyles,
  '&:disabled': inputDisabledStyles,
  '&:not(:disabled):not(:focus):hover': inputHoverStyles,
  '&::placeholder': inputPlaceholderStyles,
  '&:-internal-autofill-selected': {
    backgroundColor: `${theme.colors.gray400} !important`,
  },
  // @jason do we need this? Does Stitches apply this automatically?
  [`&:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active`]: {
    color: `${theme.colors.gray900} !important`,
    '-webkit-text-fill-color': `${theme.colors.gray900} !important`,
    transition: 'background-color 100000s ease 0s',
  },
}

export const Input = styled('input', {
  ...inputCss,
  variants: {
    error: {
      true: inputErrorStyles,
    },
    iconLeft: {
      true: {
        '&:focus': inputIconLeftFocusStyles,
      },
    },
    // TODO: add story for this & review usage
    plain: {
      true: {
        paddingLeft: '0px',
        paddingRight: '0px',
        borderRight: '0px',
        borderRadius: '0px',
        height: '100%',
        marginBottom: '0px',
        '&:hover': {
          borderRadius: '0px',
          boxShadow: 'none',
          border: `1px solid transparent`,
        },
        '&:focus': {
          borderRadius: '0px',
          boxShadow: 'none',
          border: `1px solid transparent`,
        },
        [`&::-webkit-outer-spin-button,
          &::-webkit-inner-spin-button`]: {
          '-webkit-appearance': 'none',
          margin: 0,
        },
      },
    },
  },
  compoundVariants: [
    {
      iconLeft: true,
      error: true,
      css: inputLeftIconErrorStyles,
    },
  ],
})
