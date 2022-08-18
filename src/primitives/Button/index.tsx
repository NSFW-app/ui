import { styled, theme, CSS } from 'core/stitches'

export const buttonCss: CSS = {
  margin: 0,
  backgroundColor: 'transparent',
  color: theme.colors.gray900,
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: 'none',
  outline: 'none',
  transition: 'background-color 200ms ease, opacity 200ms ease',
  borderRadius: '8px',
  padding: '16px',
  width: '100%',
  fontSize: '14px',
  lineHeight: '16px',
  fontWeight: 600,
  textDecoration: 'none',
  cursor: 'pointer',
  '&:focus': {
    outline: 'none',
  },
  '&::before': {
    content: 'none',
  },
  '&:disabled': {
    cursor: 'not-allowed',
  },
}

export const primaryButtonVariantCss: CSS = {
  backgroundColor: theme.colors.voilet100,
  // So the button is exact same height side-by-side with secondary variant
  border: `1px solid ${theme.colors.voilet100}`,
  '&:disabled': {
    backgroundColor: theme.colors.voilet200,
    color: theme.colors.gray800,
  },
  '@media (hover: hover)': {
    '&:hover': {
      backgroundColor: theme.colors.voilet200,
      color: theme.colors.gray900,
    },
  },
  '@media (hover: none)': {
    '& svg .primary.stroke': {
      stroke: theme.colors.gray900,
    },
    '& svg .primary.fill': {
      fill: theme.colors.gray900,
    },
  },
}

export const dangerButtonVariantCss: CSS = {
  color: 'red',
}

export const secondaryButtonVariantCss: CSS = {
  backgroundColor: theme.colors.gray400,
  boxShadow: `inset 0px 0px 0px 1px ${theme.colors.gray400}`,
  border: `1px solid ${theme.colors.gray500}`,
  '@media (hover: hover)': {
    '&:hover': {
      backgroundColor: theme.colors.gray500,
      color: theme.colors.gray900,
    },
  },
  '&:disabled': {
    color: theme.colors.gray700,
  },
}

export const iconButtonCss: CSS = {
  height: '36px',
  width: '36px',
  minWidth: '36px',
  minHeight: '36px',
  padding: 0,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  position: 'relative',
  borderRadius: '100%',
  textDecoration: 'none',
  '& svg .primary.fill': {
    fill: theme.colors.gray800,
  },
  '& svg .primary.stroke': {
    stroke: theme.colors.gray800,
  },
  '& p, span, div': {
    color: theme.colors.gray800,
  },
  '@media (hover: hover)': {
    '&:hover svg .primary.stroke': {
      stroke: theme.colors.gray900,
    },
    '&:hover svg .primary.fill': {
      fill: theme.colors.gray900,
    },
    '&:hover p, &:hover span, &:hover div': {
      color: theme.colors.gray900,
    },
  },
  '@lg': {
    // smaller button ok for desktop (mouse more accurate than fat thumb)
    height: '28px',
    width: '28px',
  },
}

export const activeIconButtonCss: CSS = {
  ...iconButtonCss,
  '& svg .primary.stroke': {
    stroke: theme.colors.gray900,
  },
  '& svg .primary.fill': {
    fill: theme.colors.gray900,
  },
  '& p, span, div': {
    color: theme.colors.gray900,
  },
}

export const pillButtonCss: CSS = {
  display: 'inline-block',
  textAlign: 'center',
  height: 'auto',
  padding: '4px 16px',
  fontFamily: theme.fonts.secondary,
  fontSize: '14px',
  fontWeight: '400',
  color: theme.colors.gray800,
  borderRadius: '14px',
  cursor: 'pointer',
  transition:
    'background-color 200ms ease, color 200ms ease, border 200ms ease',
  outline: 'none',
  border: '1px solid transparent',
  backgroundColor: 'transparent',
  width: '100%',
  textTransform: 'none',
  textDecoration: 'none',
  '@media (hover: hover)': {
    '&:hover': {
      backgroundColor: theme.colors.gray400,
      border: `1px solid ${theme.colors.gray500}`,
      color: theme.colors.gray800,
    },
  },
  '@md': {
    textAlign: 'left',
  },
}

export const activePillButtonCss: CSS = {
  ...pillButtonCss,
  color: theme.colors.gray900,
  backgroundColor: theme.colors.gray400,
  border: `1px solid ${theme.colors.gray500}`,
  '@media (hover: hover)': {
    '&:hover': {
      color: theme.colors.gray900,
      // Display only pill with variants: pill, active, and disabled
      // todo story
      '&:disabled': {
        backgroundColor: theme.colors.gray600,
      },
    },
  },
  '&:disabled': {
    cursor: 'default',
  },
}

export const primaryPillButtonCss: CSS = {
  ...pillButtonCss,
  color: theme.colors.gray900,
  backgroundColor: theme.colors.voilet100,
  '@media (hover: hover)': {
    '&:hover': {
      backgroundColor: theme.colors.voilet200,
      color: theme.colors.gray900,
    },
  },
}

export const roundButtonCss: CSS = {
  width: '48px',
  height: '48px',
  minWidth: '48px',
  minHeight: '48px',
  borderRadius: '100%',
  padding: 0,
}

export const textButtonVariantCss: CSS = {
  textTransform: 'none',
  textDecoration: 'none',
  fontWeight: 500,
  '@media (hover: hover)': {
    '&:hover': {
      textDecoration: 'underline',
    },
  },
}

export const web3ModalButtonCss: CSS = {
  textTransform: 'capitalize',
  fontWeight: '400',
  backgroundColor: theme.colors.gray400,
  borderBottom: `1px solid ${theme.colors.gray500}`,
  borderRadius: '0px',
  justifyContent: 'space-between',
  '@media (hover: hover)': {
    '&:hover': {
      backgroundColor: theme.colors.gray500,
    },
  },
}

export const tabButtonCss: CSS = {
  padding: '0px',
  backgroundColor: theme.colors.gray400,
  fontWeight: '400',
  borderRadius: '8px',
  textTransform: 'capitalize',
  '@media (hover: hover)': {
    '&:hover': {
      backgroundColor: theme.colors.gray500,
    },
  },
}

export const activeTabButtonCss: CSS = {
  backgroundColor: theme.colors.gray600,
  '@media (hover: hover)': {
    '&:hover': {
      backgroundColor: theme.colors.gray600,
      cursor: 'pointer',
    },
  },
}

export const Button = styled('button', {
  ...buttonCss,
  variants: {
    theme: {
      primary: primaryButtonVariantCss,
      secondary: secondaryButtonVariantCss,
      text: textButtonVariantCss,
      danger: dangerButtonVariantCss,
    },
    icon: {
      true: iconButtonCss,
    },
    round: {
      true: roundButtonCss,
    },
    uppercase: {
      true: {
        textTransform: 'uppercase',
      },
    },
    pill: {
      true: pillButtonCss,
    },
    active: {
      true: {},
    },
    web3Wallet: {
      true: web3ModalButtonCss,
    },
    tab: {
      true: tabButtonCss,
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
  },
  compoundVariants: [
    {
      pill: true,
      active: true,
      css: activePillButtonCss,
    },
    {
      pill: true,
      theme: 'primary',
      css: { ...pillButtonCss, ...primaryPillButtonCss },
    },
    {
      icon: true,
      active: true,
      css: activeIconButtonCss,
    },
    {
      icon: true,
      active: false,
      theme: 'primary',
      css: { ...iconButtonCss, ...primaryButtonVariantCss },
    },
    {
      tab: true,
      active: true,
      css: activeTabButtonCss,
    },
  ],
})
