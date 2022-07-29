import { styled } from 'core/stitches'
import { Flex } from 'primitives/Flex'

export const Card = styled(Flex, {
  width: '100%',
  padding: '16px',
  alignItems: 'center',
  backgroundColor: '$gray400',
  borderRadius: '12px',
  variants: {
    faint: {
      true: {
        backgroundColor: '$gray300',
      },
    },
    clear: {
      true: {
        backgroundColor: 'transparent',
      },
    },
    dotted: {
      true: {
        backgroundColor: 'transparent',
        backgroundImage: `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='0.75rem' ry='0.75rem' stroke='%23393953' stroke-width='0.125rem' stroke-dasharray='6%2c8' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e")`,
      },
    },
  },
})
