import { ComponentProps } from '@stitches/react'
import { theme, styled } from 'core/stitches'
import { IconComponent, IconContainer, KnownIcon } from 'components/Icon'
import React from 'react'
import { Flex } from 'primitives/Flex'
import { fieldIconWrapperStyles } from './styles'
import { Box } from 'primitives/Box'

export const WrapperFieldIcon = styled(Flex, {
  ...fieldIconWrapperStyles,
  alignItems: 'center',
  borderRadius: '8px',
  padding: '16px',
  margin: 0,
  '&.field-icon': {
    backgroundColor: theme.colors.gray400,
  },
  variants: {
    ...fieldIconWrapperStyles.variants,
    disabled: {
      true: {
        border: `1px solid ${theme.colors.gray500}`,
        cursor: 'not-allowed',
        '&.field-icon': {
          backgroundColor: theme.colors.gray100,
        },
      },
    },
  },
  compoundVariants: fieldIconWrapperStyles.compoundVariants,
  defaultVariants: {
    iconPosition: 'right',
  },
})

export interface IconOrButtonProps
  extends ComponentProps<typeof WrapperFieldIcon> {
  onClick?: ComponentProps<typeof Box>['onClick']
}

export const IconOrButton: React.FC<IconOrButtonProps> = ({
  children,
  ...props
}) => <WrapperFieldIcon {...props}>{children}</WrapperFieldIcon>

export const StyledIconContainer = styled(IconContainer, {
  background: 'none !important',
  'svg .primary.fill': { fill: theme.colors.gray800 },
  'svg .primary.stroke': { stroke: theme.colors.gray800 },
  variants: {
    error: {
      true: {
        'svg .primary.fill': { fill: theme.colors.red100 },
        'svg .primary.stroke': { stroke: theme.colors.red100 },
      },
    },
    disabled: {
      true: {
        'svg .primary.fill': { fill: theme.colors.gray500 },
        'svg .primary.stroke': { stroke: theme.colors.gray500 },
      },
    },
  },
})

export interface InputActionIconProps
  extends ComponentProps<typeof IconOrButton> {
  disabled?: boolean
  icon?: KnownIcon
}

export const InputActionIcon: React.FC<InputActionIconProps> = ({
  css,
  error = false,
  disabled,
  icon,
  onClick,
  children,
  iconPosition,
  ...args
}) => {
  return (
    <IconOrButton
      data-text-field-icon
      className='field-icon'
      error={error}
      disabled={disabled}
      iconPosition={iconPosition}
      css={css}
      {...(onClick && { as: 'button', onClick, type: 'button' })}
      {...args}
    >
      <StyledIconContainer error={!!error} disabled={disabled}>
        {icon && <IconComponent icon={icon} />}
        {children}
      </StyledIconContainer>
    </IconOrButton>
  )
}
