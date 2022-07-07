import { ComponentProps } from '@stitches/react'
import { Icon, Lock as LockIcon } from 'common/Icon'
import { theme } from 'lib/theme'
import { Flex } from 'primitives/Flex'

export interface PricePillProps extends ComponentProps<typeof Flex> {
  price: number
  isVisible: boolean
  handlePayment: () => void
}

export const PricePill: React.FC<PricePillProps> = ({
  price,
  isVisible,
  handlePayment,
  css,
}) => {
  return (
    <Flex
      onClick={(e) => {
        e.preventDefault()
        if (!isVisible) {
          handlePayment()
        }
      }}
      css={{
        backgroundColor: theme.colors.voilet100,
        padding: isVisible ? '8px 16px' : '6px 12px ',
        display: 'inline-flex',
        borderRadius: '16px',
        justifyContent: 'center',
        cursor: isVisible ? 'default' : 'pointer',
        '&:hover svg > .primary.fill': {
          fill: theme.colors.gray800,
        },
        ...css,
      }}
    >
      {isVisible ? (
        <Icon icon='Unlock' css={{ width: 11, height: 12 }} />
      ) : (
        <LockIcon />
      )}
    </Flex>
  )
}
