import { styled } from 'core/stitches'
import { Input, inputErrorStyles } from 'primitives/Input'

export const TextFieldInput = styled(Input, {
  marginBottom: '0px',
  variants: {
    error: {
      true: inputErrorStyles,
      message: {
        ...inputErrorStyles,
        borderBottomRightRadius: '0px',
        borderBottomLeftRadius: '0px',
      },
    },
    iconPosition: {
      left: {},
      right: {},
    },
  },
})
