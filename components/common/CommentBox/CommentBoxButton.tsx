import { Button, ButtonProps } from 'common/Button'
import { Icon, KnownIcon } from 'common/Icon'
import { theme } from 'lib/theme'
import { Flex } from 'primitives/Flex'

export interface CommentBoxButtonProps extends ButtonProps {
  buttonIcon?: KnownIcon
}

export const CommentBoxButton: React.FC<CommentBoxButtonProps> = ({
  buttonIcon,
  children,
  css,
  ...args
}) => (
  <Button
    css={{
      padding: '15px 0px',
      '& svg > path': {
        stroke: theme.colors.gray800,
      },
      '&:hover svg > path': {
        stroke: theme.colors.gray900,
      },
      '&:hover div': {
        color: theme.colors.gray900,
      },
      whiteSpace: 'nowrap',
      textTransform: 'capitalize',
      width: 'auto',
      ...css,
    }}
    {...args}
  >
    <Flex
      css={{
        alignItems: 'center',
        color: theme.colors.gray800,
        fontSize: '12px',
        fontWeight: '400',
        transition: 'color 200ms ease',
      }}
    >
      {buttonIcon && (
        <Icon
          icon={buttonIcon}
          css={{
            transform: 'scale(0.7)',
            marginRight: '-1px',
          }}
        />
      )}
      {children}
    </Flex>
  </Button>
)
