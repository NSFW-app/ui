import { ComponentProps, VariantProps } from '@stitches/react'
import { forwardRef } from 'react'
import { styled } from 'core/stitches'
import { Anchor } from 'primitives/Anchor'
import { Flex } from 'primitives/Flex'
import { Span } from 'primitives/Span'

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
    highlightPosition: {
      horizontal: {
        borderBottom: '2px solid transparent',
        '&:hover': {
          borderBottom: '2px solid $voilet100',
        },
      },
      vertical: {
        borderLeft: '2px solid transparent',
        paddingLeft: '24px',
        '&:hover': {
          borderLeft: '2px solid $voilet100',
        },
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
      css: {
        borderBottom: '2px solid $voilet100',
      },
    },
    {
      highlightPosition: 'vertical',
      active: true,
      css: {
        borderLeft: '2px solid $voilet100',
      },
    },
  ],
  defaultVariants: {
    highlightPosition: 'horizontal',
  },
})

export interface NavLinkProps extends ComponentProps<typeof Anchor> {
  active?: VariantProps<typeof NavLinkContainer>['active']
  highlightPosition?: VariantProps<typeof NavLinkContainer>['highlightPosition']
}

export const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(
  ({ children, active = false, highlightPosition, css, ...props }, ref) => {
    return (
      <NavLinkContainer
        active={active}
        highlightPosition={highlightPosition}
        css={css}
      >
        <NavLinkAnchor nounderline ref={ref} {...props}>
          <NavLinkText>{children}</NavLinkText>
        </NavLinkAnchor>
      </NavLinkContainer>
    )
  }
)
