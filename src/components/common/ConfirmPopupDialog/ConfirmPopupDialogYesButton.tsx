import { ComponentProps } from '@stitches/react'
import { Button } from 'common/Button'
import { Icon } from 'common/Icon'
import { Spinner } from 'common/Spinner'
import { theme } from 'core/stitches'
import { Box } from 'primitives/Box'
import { Text } from 'primitives/Text'

export const ConfirmPopupDialogYesButton: React.FC<ComponentProps<
  typeof Button
>> = ({ onClick, children, css, loading, ...props }) => {
  return (
    <Button
      onClick={(e) => {
        if (onClick) {
          onClick(e)
        }
      }}
      theme='secondary'
      css={{
        marginRight: '10px',
        padding: '8px 0px',
        minHeight: '68px',
        ...css,
      }}
      disabled={!!loading}
      {...props}
    >
      <Box css={{ backgroundColor: 'transparent' }}>
        {loading ? (
          <Spinner css={{ marginBottom: '10px' }} />
        ) : (
          <Icon
            icon='Tick'
            css={{
              transform: 'scale(0.8)',
              position: 'relative',
              top: '-3px',
              '& path': { stroke: theme.colors.gray900 },
            }}
          />
        )}
        <Text
          css={{
            textTransform: 'none',
            fontSize: '13px',
            lineHeight: '20px',
          }}
        >
          {children ? children : 'Yes'}
        </Text>
      </Box>
    </Button>
  )
}
