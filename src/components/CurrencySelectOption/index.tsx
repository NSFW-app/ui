import { Button } from 'primitives/Button'
import { Flex } from 'primitives/Flex'
import { Text } from 'primitives/Text'
import { ButtonProps } from 'components/Button'
import { Icon, IconProps } from 'components/Icon'

export interface CurrencySelectOptionProps extends Omit<ButtonProps, 'icon'> {
  title: string
  subtitle: string
  icon: IconProps['icon']
}

export const CurrencySelectOption: React.FC<CurrencySelectOptionProps> = ({
  title,
  subtitle,
  icon,
  css,
  ...btnProps
}) => (
  <Button
    theme='secondary'
    css={{
      border: 'none',
      borderRadius: '0px',
      textTransform: 'unset',
      ...css,
    }}
    {...btnProps}
  >
    <Flex
      css={{
        width: '100%',
        justifyContent: 'space-between',
      }}
    >
      <Flex center>
        <Icon icon={icon} css={{ marginRight: '8px' }} />
        <Text type='body2'>{title}</Text>
      </Flex>
      <Text type='body2' subText css={{ marginRight: '16px' }}>
        {subtitle}
      </Text>
    </Flex>
  </Button>
)
