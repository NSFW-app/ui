import { getSelectorsByUserAgent } from 'react-device-detect'

// TODO: move to UI lib

// react-device-detect does not type these for some reason, even though it would be easily
// typed & has other types..
// https://github.com/duskload/react-device-detect/blob/54ce6cfbed0479691c45aa0371e4afdfaaae74f8/src/lib/buildSelectors.js#L4
interface Selectors {
  isMobile: boolean
  isMobileOnly: boolean
  isTablet: boolean
  isAndroid: boolean
  isIOS: boolean
  isSafari: boolean
  // todo: add more types... contribute to lib ;P ?
}
const DEFAULT_SELECTORS: Selectors = {
  isMobile: false,
  isMobileOnly: false,
  isTablet: false,
  isAndroid: false,
  isIOS: false,
  isSafari: false,
}
// Leverage react-device-detect which nicely wraps [ua-parser-js](https://www.npmjs.com/package/ua-parser-js)
export const detectDevice = () => {
  const userAgent = typeof window !== 'undefined' && navigator.userAgent

  if (!userAgent) {
    console.warn('No user-agent found attempting to detect device')
    return DEFAULT_SELECTORS
  }

  return getSelectorsByUserAgent(userAgent) as Selectors
}
