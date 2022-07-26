import { Icon } from 'components/Icon'
import { Button } from 'components/Button'
import { Flex } from 'primitives/Flex'
import { Text } from 'primitives/Text'
import { ButtonProps } from '..'

interface ActionButtonProps extends ButtonProps {
  title?: string
  subtitle?: string
}

const ActionButton: React.FC<ActionButtonProps> = ({
  title,
  subtitle,
  css,
  children,
  ...btnProps
}) => {
  return (
    <Button
      theme='secondary'
      css={{ textTransform: 'unset', ...css }}
      {...btnProps}
    >
      <Flex
        css={{
          width: '100%',
          justifyContent: 'space-between',
          background: 'unset',
          alignItems: 'center',
        }}
      >
        {title && <Text type='body2'>{title}</Text>}
        {children}
        <Flex css={{ background: 'unset', alignItems: 'center' }}>
          {subtitle && (
            <Text
              type='body2'
              subText
              css={{ marginRight: !btnProps.disabled ? '16px' : 0 }}
            >
              {subtitle}
            </Text>
          )}
          <Flex
            css={{
              height: '24px',
              width: '24px',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {!btnProps.disabled && (
              <Icon icon='Chevron' css={{ background: 'unset' }} />
            )}
          </Flex>
        </Flex>
      </Flex>
    </Button>
  )
}

export default ActionButton
