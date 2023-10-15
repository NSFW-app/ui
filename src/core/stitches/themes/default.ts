import { createStitches } from '@stitches/react'

// Default NSFW Theme is a DARK theme
export const defaultTheme = createStitches({
  // 900 is the lightest color on a dark theme, and the darkest color on a light theme.
  // https://www.radix-ui.com/colors
  theme: {
    colors: {
      voilet200: '#793AFF', // this shade is slightly lighter
      voilet100: '#7230FF', // This shade is slightly darker
      blue100: '#3BACEC',
      red100: '#E94B4B',
      gold100: '#FBC22F',
      gray900: '#FFFFFF', // lightest
      gray800: '#898EA2',
      gray700: '#5B5E6C',
      gray600: '#3D3F48',
      gray500: '#2C2E35',
      gray400: '#282A30',
      gray300: '#202126',
      gray100: '#1B1C20', // darkest
    },
    fonts: {
      primary: '"Inter", sans-serif',
      secondary: '"Roboto", Arial, Helvetica, sans-serif;',
      external: '"GT-Super", sans-serif',
    },
    space: {
      1: '4px',
      2: '8px',
      3: '16px',
      4: '24px',
      5: '36px',
      6: '48px',
    },
    radii: {},
    shadows: {
      lg: '6px 3px 16px #121217',
      sm: '6px -7px 16px #121217',
    },
    zIndices: {
      modal: 6000,
      overlay: 4000,
      dropdown: 3000,
      layerThree: 2500,
      layerTwo: 2000,
      layerOne: 1500,
      foreground: 1000,
      background: -1000,
    },
    transitions: {
      easeOutExpo: `cubic-bezier(0.16, 1, 0.3, 1)`,
      iconColor: `fill 200ms ease, stroke 200ms ease`,
    },
    gradients: {
      blue: `linear-gradient(275deg, #7863FE 0%, #13C1EB 100%)`,
    },
    maxWidths: {
      xsmall: 320,
      small: 480,
      medium: 768,
      large: 1024,
      xlarge: 1200,
      xxlarge: 1536,
    },
    container: {
      maxWidth: '1136px',
      padding: '16px',
    },
  },
  media: {
    xs: '(min-width: 320px)',
    sm: '(min-width: 480px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 1024px)',
    xl: '(min-width: 1200px)',
    xxl: '(min-width: 1536px)',
  },
})
