import React from 'react'
import { ComponentProps, CSS } from '@stitches/react'
import { styled, theme } from 'core/stitches'
import { Flex } from 'primitives/Flex'

const errorFocusStyles: CSS = {
  '+ [data-text-field-icon]': {
    boxShadow: 'unset',
    border: `1px solid ${theme.colors.red100}`,
    'svg > path.primary.fill': { fill: theme.colors.red100 },
    'svg > path.primary.stroke': { stroke: theme.colors.red100 },
  },
}

export const InputActionFieldContainer = styled(Flex, {
  position: 'relative',
  flexWrap: 'wrap',
  marginBottom: '20px',
  transition: 'margin 300ms ease',
  backgroundColor: 'transparent',
  variants: {
    iconPosition: {
      right: {
        '& [data-text-field-icon]': {
          borderLeft: '0 !important',
          borderTopRightRadius: '8px',
          borderBottomRightRadius: '8px',
        },
        'input, textarea': {
          borderTopRightRadius: '0px',
          borderBottomRightRadius: '0px',
          borderRight: '0px !important',
          '&:not(:disabled):hover': {
            '+ [data-text-field-icon]': {
              border: `1px solid ${theme.colors.gray600}`,
              borderLeft: '0px',
            },
            '&:focus': {
              '+ [data-text-field-icon]': {
                border: `1px solid ${theme.colors.voilet100}`,
                borderLeft: '0px',
              },
            },
          },
          '&:focus': {
            '& + [data-text-field-icon]': {
              boxShadow: `0 0 4px ${theme.colors.voilet100}`,
              border: `1px solid ${theme.colors.voilet100}`,
              clipPath: 'inset(-4px -4px -4px 0px)',
              // Not all icons use fill, some use stroke, but rarely both together.
              // Applied the color to fill and stroke all the time can mess up icons.
              // Icon svg React FCs need to have these classes applied to them for simple targeting.
              'svg > path.primary.fill': { fill: theme.colors.voilet100 },
              'svg > path.primary.stroke': { stroke: theme.colors.voilet100 },
            },
          },
        },
      },
      left: {
        '& > div:first-child': {
          display: 'flex',
          flexDirection: 'row-reverse',
        },
        '& > div:first-child [data-text-field-icon]': {
          order: 1,
        },
        '& > div:first-child :not([data-text-field-icon])': {
          order: 0,
        },
        '& [data-text-field-icon]': {
          borderRight: '0 !important',
          borderRadius: '0px',
          borderTopLeftRadius: '8px',
          borderBottomLeftRadius: '8px',
        },
        'input, textarea': {
          paddingLeft: '0px',
          borderTopLeftRadius: '0px',
          borderBottomLeftRadius: '0px',
          borderLeft: '0px !important',
          '&:not(:disabled):hover': {
            '+ [data-text-field-icon]': {
              border: `1px solid ${theme.colors.gray600}`,
              borderRight: '0px',
            },
            '&:focus': {
              '+ [data-text-field-icon]': {
                border: `1px solid ${theme.colors.voilet100}`,
                borderRight: '0px',
              },
            },
          },
          '&:focus': {
            '& + [data-text-field-icon]': {
              boxShadow: `0 0 4px ${theme.colors.voilet100}`,
              border: `1px solid ${theme.colors.voilet100}`,
              clipPath: 'inset(-4px 0px -4px -4px)',
              // Not all icons use fill, some use stroke, but rarely both together.
              // Applied the color to fill and stroke all the time can mess up icons.
              // Icon svg React FCs need to have these classes applied to them for simple targeting.
              'svg > path.primary.fill': { fill: theme.colors.voilet100 },
              'svg > path.primary.stroke': { stroke: theme.colors.voilet100 },
            },
          },
        },
      },
    },
    error: {
      true: {},
    },
  },
  compoundVariants: [
    {
      error: true,
      iconPosition: 'right',
      css: {
        'input, textarea': {
          '&:not(:disabled):hover': {
            '+ [data-text-field-icon]': {
              border: `1px solid ${theme.colors.red100}`,
              borderLeft: '0px',
            },
            '&:focus': {
              '+ [data-text-field-icon]': {
                border: `1px solid ${theme.colors.red100}`,
              },
            },
          },
          '&:focus': errorFocusStyles,
        },
      },
    },
    {
      error: true,
      iconPosition: 'left',
      css: {
        '& [data-text-field-icon]': {
          borderBottomLeftRadius: '0px',
        },
        'input, textarea': {
          '&:not(:disabled):hover': {
            '+ [data-text-field-icon]': {
              border: `1px solid ${theme.colors.red100}`,
              borderRight: '0px',
            },
            '&:focus': {
              '+ [data-text-field-icon]': {
                border: `1px solid ${theme.colors.red100}`,
              },
            },
          },
          '&:focus': errorFocusStyles,
        },
      },
    },
  ],
})

export interface InputActionFieldProps
  extends ComponentProps<typeof InputActionFieldContainer> {}

export const InputActionField: React.FC<InputActionFieldProps> = ({
  css = {},
  children,
  ...props
}) => {
  return (
    <InputActionFieldContainer css={css} {...props}>
      {children}
    </InputActionFieldContainer>
  )
}
