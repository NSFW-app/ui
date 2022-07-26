import { theme } from 'core/stitches'
export const fieldIconWrapperStyles = {
  position: 'relative',
  backgroundColor: theme.colors.gray400,
  border: `1px solid transparent`,
  width: 'auto',

  '&:disabled': {
    backgroundColor: theme.colors.gray100,
    border: `1px solid ${theme.colors.gray500}`,
  },
  variants: {
    error: {
      true: {
        border: `1px solid ${theme.colors.red100}`,
      },
      message: {
        border: `1px solid ${theme.colors.red100}`,
        borderBottomRightRadius: '0px !important',
      },
    },
    iconPosition: {
      right: {
        borderTopLeftRadius: '0px',
        borderBottomLeftRadius: '0px',
      },
      left: {
        borderRight: '0 !important',
        borderTopRightRadius: '0px',
        borderBottomRightRadius: '0px',
      },
    },
  },
  compoundVariants: [
    {
      error: true,
      iconPosition: 'right',
      css: {
        // Overrides all the border values for various element states and error variant states.
        borderLeft: '0 !important',
      },
    },
    {
      error: true,
      iconPosition: 'left',
      css: {
        borderBottomLeftRadius: '0px !important',
      },
    },
  ],
  defaultVariants: {
    iconPosition: 'right',
  },
}
