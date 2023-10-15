import { defaultTheme } from '../themes/default'

import InterThin from 'assets/fonts/Inter/Inter-Thin.ttf'
import InterExtraLight from 'assets/fonts/Inter/Inter-ExtraLight.ttf'
import InterLight from 'assets/fonts/Inter/Inter-Light.ttf'
import InterRegular from 'assets/fonts/Inter/Inter-Regular.ttf'
import InterMedium from 'assets/fonts/Inter/Inter-Medium.ttf'
import InterSemiBold from 'assets/fonts/Inter/Inter-SemiBold.ttf'
import InterBold from 'assets/fonts/Inter/Inter-Bold.ttf'
import InterExtraBold from 'assets/fonts/Inter/Inter-ExtraBold.ttf'
import InterBlack from 'assets/fonts/Inter/Inter-Black.ttf'

import RobotoLight from 'assets/fonts/Roboto/Roboto-Light.ttf'
import RobotoRegular from 'assets/fonts/Roboto/Roboto-Regular.ttf'
import RobotoMedium from 'assets/fonts/Roboto/Roboto-Medium.ttf'
import RobotoBold from 'assets/fonts/Roboto/Roboto-Bold.ttf'

import GtSuperDisplayLightTrial from 'assets/fonts/GT-Super/GT-Super-Text-Black-Trial.ttf'
import GtSuperDisplayMediumTrial from 'assets/fonts/GT-Super/GT-Super-Text-Medium-Trial.ttf'
import GtSuperDisplayRegularTrial from 'assets/fonts/GT-Super/GT-Super-Text-Regular-Trial.ttf'
import GtSuperDisplaySuperTrial from 'assets/fonts/GT-Super/GT-Super-Text-Super-Trial.ttf'
import GtSuperDisplayBoldTrial from 'assets/fonts/GT-Super/GT-Super-Text-Bold-Trial.ttf'

// Tell Rollup to include this file in the bundle.
// Keeping these here as good POC of CSS inclusion, but not exactly sure how we'll use this.
// Also, cbf moving these styles into the object syntax below, and think its valuable to support css/scss.
// import 'assets/css/reset.css'

const { theme, globalCss } = defaultTheme

export const fonts = globalCss({
  '*': {
    fontFamily: theme.fonts.primary,
  },
  '@font-face': [
    {
      fontFamily: 'Inter',
      src: `local("Inter-Thin"), url("${InterThin}") format("truetype")`,
      fontWeight: 100,
      fontStyle: 'normal',
      fontDisplay: 'fallback',
    },
    {
      fontFamily: 'Inter',
      src: `local("Inter-ExtraLight"), url("${InterExtraLight}") format("truetype")`,
      fontWeight: 200,
      fontStyle: 'normal',
      fontDisplay: 'fallback',
    },
    {
      fontFamily: 'Inter',
      src: `local("Inter-Light"), url("${InterLight}") format("truetype")`,
      fontWeight: 300,
      fontStyle: 'normal',
      fontDisplay: 'fallback',
    },
    {
      fontFamily: 'Inter',
      src: `local("Inter-Regular"), url("${InterRegular}") format("truetype")`,
      fontWeight: 400,
      fontStyle: 'normal',
      fontDisplay: 'fallback',
    },
    {
      fontFamily: 'Inter',
      src: `local("Inter-Medium"), url("${InterMedium}") format("truetype")`,
      fontWeight: 500,
      fontStyle: 'normal',
      fontDisplay: 'fallback',
    },
    {
      fontFamily: 'Inter',
      src: `local("Inter-SemiBold"), url("${InterSemiBold}") format("truetype")`,
      fontWeight: 600,
      fontStyle: 'normal',
      fontDisplay: 'fallback',
    },
    {
      fontFamily: 'Inter',
      src: `local("Inter-Bold"), url("${InterBold}") format("truetype")`,
      fontWeight: 700,
      fontStyle: 'normal',
      fontDisplay: 'fallback',
    },
    {
      fontFamily: 'Inter',
      src: `local("Inter-ExtraBold"), url("${InterExtraBold}") format("truetype")`,
      fontWeight: 800,
      fontStyle: 'normal',
      fontDisplay: 'fallback',
    },
    {
      fontFamily: 'Inter',
      src: `local("Inter-Black"), url("${InterBlack}") format("truetype")`,
      fontWeight: 900,
      fontStyle: 'normal',
      fontDisplay: 'fallback',
    },

    //---------ROBOTO------
    {
      fontFamily: 'Roboto',
      src: `local("Roboto-Light"), url("${RobotoLight}") format("truetype")`,
      fontWeight: 300,
      fontStyle: 'normal',
      fontDisplay: 'fallback',
    },
    {
      fontFamily: 'Roboto',
      src: `local("Roboto-Regular"), url("${RobotoRegular}") format("truetype")`,
      fontWeight: 400,
      fontStyle: 'normal',
      fontDisplay: 'fallback',
    },
    {
      fontFamily: 'Roboto',
      src: `local("Roboto-Medium"), url("${RobotoMedium}") format("truetype")`,
      fontWeight: 500,
      fontStyle: 'normal',
      fontDisplay: 'fallback',
    },
    {
      fontFamily: 'Roboto',
      src: `local("Roboto-Bold"), url("${RobotoBold}") format("truetype")`,
      fontWeight: 700,
      fontStyle: 'normal',
      fontDisplay: 'fallback',
    },

    // -------GT_SUPER_DISPLAY----------
    {
      fontFamily: 'GT-Super-Display',
      src: `local("GT-Super-Text-Light-Trial"), url("${GtSuperDisplayLightTrial}") format("truetype")`,
      fontWeight: 100,
      fontStyle: 'normal',
      fontDisplay: 'fallback',
    },
    {
      fontFamily: 'GT-Super-Display',
      src: `local("GT-Super-Text-Light-Trial"), url("${GtSuperDisplayMediumTrial}") format("truetype")`,
      fontWeight: 300,
      fontStyle: 'normal',
      fontDisplay: 'fallback',
    },
    {
      fontFamily: 'GT-Super-Display',
      src: `local("GT-Super-Text-Regular-Trial"), url("${GtSuperDisplayRegularTrial}") format("truetype")`,
      fontWeight: 500,
      fontStyle: 'normal',
      fontDisplay: 'fallback',
    },
    {
      fontFamily: 'GT-Super-Display',
      src: `local("GT-Super-Text-Super-Trial"), url("${GtSuperDisplaySuperTrial}") format("truetype")`,
      fontWeight: 700,
      fontStyle: 'normal',
      fontDisplay: 'fallback',
    },
    {
      fontFamily: 'GT-Super-Display',
      src: `local("GT-Super-Text-Bold-Trial"), url("${GtSuperDisplayBoldTrial}") format("truetype")`,
      fontWeight: 900,
      fontStyle: 'normal',
      fontDisplay: 'fallback',
    },
  ],
})
