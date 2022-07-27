import { ComponentProps, globalCss } from '@stitches/react'
import { Icon } from 'components/Icon'
import { theme } from 'core/stitches'
import { Flex } from 'primitives/Flex'
import { Text } from 'primitives/Text'

const globalStyles = globalCss({
  '.Toastify__toast-container--bottom-center .styled-toast': {
    justifyContent: 'center',
    '.Toastify__toast-body': {
      marginLeft: '10px',
      marginRight: '10px',
    },
  },
  '.Toastify__toast-container .styled-toast': {
    backgroundColor: 'unset',
    boxShadow: 'unset',
    padding: 'unset',
    minHeight: 'unset',
    marginBottom: '15px',
    '.Toastify__toast-body': {
      backgroundColor: theme.colors.gray400,
      flex: 'unset',
      padding: '16px',
      borderRadius: '46px',
      border: `1px solid ${theme.colors.gray500}`,
    },
    '.Toastify__toast-icon': {
      alignSelf: 'start',
      marginTop: '5px',
      '> svg': {
        fill: theme.colors.gray800,
      },
    },
    '.Toastify__close-button': {
      color: theme.colors.gray900,
      marginTop: '2px',
      alignSelf: 'center',
    },
  },
  '.Toastify__toast-container .styled-toast.dark': {
    border: `1px solid ${theme.colors.gray500}`,
    backgroundColor: theme.colors.gray400,
    padding: '16px',
    '.Toastify__toast-body': {
      backgroundColor: theme.colors.gray400,
      padding: 'unset',
      borderRadius: 'unset',
      border: 'unset',
    },
  },
  '.Toastify__toast-container .styled-toast.error': {
    border: `1px solid ${theme.colors.red100}`,
    backgroundColor: theme.colors.gray400,
    padding: '16px',
    '.Toastify__toast-body': {
      backgroundColor: theme.colors.gray400,
      padding: 'unset',
      borderRadius: 'unset',
      border: 'unset',
    },
  },
  '.Toastify__toast-container .styled-toast.success': {
    border: `1px solid green`,
    backgroundColor: theme.colors.gray400,
    padding: '16px',
    '.Toastify__toast-body': {
      backgroundColor: theme.colors.gray400,
      padding: 'unset',
      borderRadius: 'unset',
      border: 'unset',
    },
  },
})

export interface SnackBarProps extends ComponentProps<typeof Flex> {
  title?: string
  actionLabel?: string
  onActionClick?: () => void
  isSuccess?: boolean
  isError?: boolean
}

export const SnackBar: React.FC<SnackBarProps> = ({
  children,
  title,
  actionLabel = 'View Post',
  onActionClick,
  isSuccess,
  isError,
  ...flexProps
}) => {
  globalStyles()

  return (
    <Flex
      css={{
        backgroundColor: 'unset',
        alignItems: 'center',
      }}
      {...flexProps}
    >
      {isSuccess && (
        <Icon
          icon='Check'
          css={{
            marginRight: '12px',
            width: '22px',
            height: '20px',
            '& .primary.fill': {
              fill: 'green',
            },
          }}
        />
      )}
      {isError && (
        <Icon
          icon='Exclamation'
          css={{
            marginRight: '10px',
            width: '25px',
            '& .primary.stroke': {
              stroke: theme.colors.red100,
            },
          }}
        />
      )}
      {title && (
        <Text
          css={{
            color: theme.colors.gray900,
            fontSize: '12px',
            lineHeight: '20px',
          }}
        >
          {title}
        </Text>
      )}
      {onActionClick && (
        <Text
          css={{
            color: theme.colors.voilet200,
            fontSize: '12px',
            lineHeight: '20px',
            margin: '0 12px',
          }}
          onClick={onActionClick}
        >
          {actionLabel}
        </Text>
      )}
      {children}
    </Flex>
  )
}
