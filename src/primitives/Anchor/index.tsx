import { styled, theme } from 'core/stitches'
import { tabButtonCss, activeTabButtonCss } from '../Button/index'
import {
  activeIconButtonCss,
  activePillButtonCss,
  buttonCss,
  iconButtonCss,
  pillButtonCss,
  primaryButtonVariantCss,
  roundButtonCss,
  secondaryButtonVariantCss,
  textButtonVariantCss,
} from 'primitives/Button'

export const Anchor = styled('a', {
  color: theme.colors.gray800,
  display: 'inline-flex',
  alignItems: 'center',
  textDecoration: 'underline',
  variants: {
    button: {
      true: buttonCss,
      tab: { ...buttonCss, ...tabButtonCss, textDecoration: 'none' },
    },
    icon: {
      true: iconButtonCss,
    },
    active: {
      true: {},
    },
    round: {
      true: roundButtonCss,
    },
    pill: {
      true: pillButtonCss,
    },
    full: {
      true: {
        height: '100%',
        width: '100%',
      },
    },
    fullHeight: {
      true: {
        height: '100%',
      },
    },
    nounderline: {
      true: {
        textDecoration: 'none',
      },
    },
    theme: {
      primary: {
        color: theme.colors.voilet100,
        '&:hover': {
          color: theme.colors.voilet200,
        },
      },
      secondary: {
        '&:hover': {
          // TODO: @maine this should be 1 shade lighter than the colour, but with current greyscale
          // that would be white.
          color: theme.colors.gray700,
        },
      },
      text: textButtonVariantCss,
    },
    disabled: {
      true: {
        cursor: 'not-allowed',
        opacity: '0.5',
      },
    },
  },
  compoundVariants: [
    {
      pill: true,
      active: true,
      css: activePillButtonCss,
    },
    {
      theme: 'primary',
      button: true,
      css: {
        ...buttonCss,
        ...primaryButtonVariantCss,
      },
    },
    {
      theme: 'secondary',
      button: true,
      css: {
        ...buttonCss,
        ...secondaryButtonVariantCss,
      },
    },
    {
      theme: 'primary',
      round: true,
      css: {
        ...buttonCss,
        ...primaryButtonVariantCss,
        ...roundButtonCss,
      },
    },
    {
      theme: 'secondary',
      round: true,
      css: {
        ...buttonCss,
        ...secondaryButtonVariantCss,
        ...roundButtonCss,
      },
    },
    {
      active: true,
      icon: true,
      css: activeIconButtonCss,
    },
    {
      active: true,
      icon: true,
      full: true,
      css: { ...activeIconButtonCss, height: '100%', width: '100%' },
    },
    {
      active: true,
      button: 'tab',
      css: activeTabButtonCss,
    },
  ],
  defaultVariants: {
    button: false,
  },
})
