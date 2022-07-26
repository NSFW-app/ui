import { Button, ButtonProps } from 'components/Button'
import { Icon } from 'components/Icon'
import { Flex } from 'primitives/Flex'

export interface LoadMoreButtonProps extends ButtonProps {}

export const LoadMoreButton = ({ css, ...props }: LoadMoreButtonProps) => (
  <Flex center css={{ padding: '16px', ...css }}>
    <Button icon theme='primary' css={{ border: 'none' }} {...props}>
      <Icon icon='Arrow' rotate={90} />
    </Button>
  </Flex>
)
