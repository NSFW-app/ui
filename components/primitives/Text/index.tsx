import { styled, theme, CSS } from 'lib/theme'

export const textBody1Css: CSS = {
  fontSize: '16px',
  wordSpacing: 1.3,
  lineHeight: '28px',
}

export const textBody2Css: CSS = {
  fontSize: '14px',
  wordSpacing: 1.5,
  lineHeight: '24px',
}

export const textBody3Css: CSS = {
  fontSize: '13px',
  wordSpacing: 0,
  lineHeight: '20px',
}

export const textBody4Css: CSS = {
  fontSize: '12px',
  wordSpacing: 0,
  lineHeight: '16px',
  color: theme.colors.gray800,
}

export const textCaption1Css: CSS = {
  fontSize: '13px',
  wordSpacing: 1.5,
  lineHeight: '16px',
}

export const textCaption2Css: CSS = {
  ...textCaption1Css,
  fontWeight: 500,
}

export const textCaption3Css: CSS = {
  fontSize: '13px',
  wordSpacing: 0,
  lineHeight: '16px',
}

export const Text = styled('p', {
  color: theme.colors.gray900,
  transition: 'color 200ms ease',
  fontWeight: 400,
  variants: {
    type: {
      body1: textBody1Css,
      body2: textBody2Css,
      body3: textBody3Css,
      body4: textBody4Css,
      caption1: textCaption1Css,
      caption2: textCaption2Css,
      caption3: textCaption3Css,
    },
    font: {
      primary: {
        fontFamily: theme.fonts.primary,
      },
      secondary: {
        fontFamily: theme.fonts.secondary,
      },
    },
    subText: {
      true: {
        color: theme.colors.gray800,
      },
    },
    medium: {
      true: {
        fontWeight: 500,
      },
    },
    bold: {
      true: {
        fontWeight: 700,
      },
    },
    capitalize: {
      true: {
        textTransform: 'capitalize',
      },
    },
    lineClamp: {
      true: {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        display: '-webkit-box',
        // Default lineClamp, pass `css` to primitive to set another value
        '-webkit-line-clamp': 1,
        '-webkit-box-orient': 'vertical',
      },
    },
    ellipsis: {
      true: {
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
      },
    },
    error: {
      true: {
        color: theme.colors.red100,
      },
    },
  },
  defaultVariants: {
    type: 'body1',
    font: 'primary',
  },
})
