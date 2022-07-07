import { ComponentProps } from '@stitches/react'
import { Button } from 'common/Button'
import { Icon } from 'common/Icon'
import { Spinner } from 'common/Spinner'
import { theme } from 'lib/theme'
import { Box } from 'primitives/Box'
import { Text } from 'primitives/Text'

export const ConfirmPopupDialogNoButton: React.FC<
  ComponentProps<typeof Button>
> = ({ onClick, children, css, loading, ...props }) => {
  return (
    <Button
      onClick={(e) => {
        if (onClick) {
          onClick(e)
        }
      }}
      theme='secondary'
      css={{
        marginLeft: '10px',
        padding: '8px 0px',
        minHeight: '68px',
        ...css,
      }}
      disabled={!!loading}
      {...props}
    >
      <Box css={{ backgroundColor: 'transparent' }}>
        {loading ? (
          <Spinner
            css={{ borderColor: theme.colors.red100, marginBottom: '5px' }}
          />
        ) : (
          <Icon
            icon='Cross'
            css={{
              '& path': { stroke: theme.colors.red100 },
            }}
          />
        )}
        <Text
          css={{
            textTransform: 'none',
            fontSize: '13px',
            lineHeight: '20px',
            color: theme.colors.red100,
          }}
        >
          {children ? children : 'No'}
        </Text>
      </Box>
    </Button>
  )
}
