import { Button, ButtonProps } from 'common/Button'
import { Icon } from 'common/Icon'
import { Flex } from 'primitives/Flex'

interface Props extends ButtonProps {}

export const LoadMoreButton = ({ css, ...props }: Props) => (
  <Flex center transparent css={{ padding: '16px', ...css }}>
    <Button icon theme='primary' css={{ border: 'none' }} {...props}>
      <Icon icon='Arrow' rotate={90} />
    </Button>
  </Flex>
)
