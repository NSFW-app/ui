import { defaultTheme } from '../themes/default'
import { reset } from './reset'

const { globalCss, theme } = defaultTheme

// Can be considered as the general global styles that most applications using the ui kit Stitches
// themes will want/need.
export const base = () => {
  // Include reset css
  reset()

  const _base = globalCss({
    html: {
      scrollBehavior: 'smooth',
    },
    'html, body, #__next': {
      height: '100%',
      position: 'relative',
      margin: 0,
      backgroundColor: theme.colors.gray100,
      color: theme.colors.gray900,
      transition: 'background-color 200ms ease, color 200ms ease',
    },
  })
  return _base()
}
