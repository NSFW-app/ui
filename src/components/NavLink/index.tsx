import { ComponentProps, VariantProps } from '@stitches/react'
import { forwardRef } from 'react'
import { styled } from 'core/stitches'
import { Anchor } from 'primitives/Anchor'
import { Flex } from 'primitives/Flex'
import { Span } from 'primitives/Span'
import { Icon } from 'components/Icon'

const NavLinkText = styled(Span, {
  fontWeight: 500,
})

const NavLinkAnchor = styled(Anchor, {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

const NavLinkContainer = styled(Flex, {
  width: '100%',
  height: '100%',
  justifyContent: 'center',
  margin: '2px',
  color: '$gray800',
  fontSize: '14px',
  '&:hover': {
    [`${NavLinkAnchor}`]: {
      color: '$gray900',
    },
  },
  '@lg': {
    fontSize: '16px',
  },
  variants: {
    active: {
      true: {
        [`${NavLinkAnchor}`]: {
          color: '$gray900',
        },
      },
    },
    withHighlight: { true: {} },
    highlightPosition: {
      horizontal: {
        borderBottom: '2px solid transparent',
      },
      vertical: {
        borderLeft: '2px solid transparent',
        paddingLeft: '24px',
        [`${NavLinkAnchor}`]: {
          justifyContent: 'start',
        },
      },
    },
  },
  compoundVariants: [
    {
      highlightPosition: 'horizontal',
      active: true,
      withHighlight: true,
      css: {
        borderBottom: '2px solid $voilet100',
      },
    },
    {
      highlightPosition: 'horizontal',
      withHighlight: true,
      css: {
        '&:hover': {
          borderBottom: '2px solid $voilet100',
        },
      },
    },
    {
      highlightPosition: 'vertical',
      active: true,
      withHighlight: true,
      css: {
        borderLeft: '2px solid $voilet100',
      },
    },
    {
      highlightPosition: 'vertical',
      withHighlight: true,
      css: {
        '&:hover': {
          borderLeft: '2px solid $voilet100',
        },
      },
    },
  ],
  defaultVariants: {
    highlightPosition: 'horizontal',
  },
})

export interface NavLinkProps extends ComponentProps<typeof Anchor> {
  active?: VariantProps<typeof NavLinkContainer>['active']
  withHighlight?: VariantProps<typeof NavLinkContainer>['withHighlight']
  highlightPosition?: VariantProps<typeof NavLinkContainer>['highlightPosition']
}

export const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(
  (
    {
      children,
      active = false,
      withHighlight = false,
      highlightPosition,
      css,
      target,
      ...props
    },
    ref
  ) => {
    return (
      <NavLinkContainer
        active={active}
        highlightPosition={highlightPosition}
        withHighlight={withHighlight}
        css={css}
      >
        <NavLinkAnchor nounderline ref={ref} target={target} {...props}>
          <NavLinkText>{children}</NavLinkText>
          {target === '_blank' && (
            <Icon
              icon='ExternalLink'
              css={{ height: 17, width: 17, marginLeft: '5px' }}
            />
          )}
        </NavLinkAnchor>
      </NavLinkContainer>
    )
  }
)
