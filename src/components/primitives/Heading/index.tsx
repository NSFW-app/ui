import { styled, theme } from 'core/stitches'

export const Heading = styled('h1', {
  color: theme.colors.gray900,
  transition: 'color 200ms ease',
  fontWeight: 600,
  variants: {
    as: {
      h1: {
        fontSize: '38px',
        lineHeight: '48px',
        wordSpacing: 0,
      },
      h2: {
        fontSize: '28px',
        lineHeight: '36px',
        wordSpacing: 0,
      },
      h3: {
        fontSize: '22px',
        fontWeight: 500,
        lineHeight: '24px',
        wordSpacing: 1.2,
      },
      h4: {
        fontSize: '18px',
        fontWeight: 500,
        lineHeight: '24px',
        wordSpacing: 1.2,
      },
      h5: {
        fontSize: '16px',
        fontWeight: 400,
        lineHeight: '28px',
        wordSpacing: 1.3,
      },
      h6: {
        fontSize: '13px',
        fontWeight: 500,
        lineHeight: '16px',
        wordSpacing: 1.3,
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
  },
  defaultVariants: {
    as: 'h1',
  },
})
