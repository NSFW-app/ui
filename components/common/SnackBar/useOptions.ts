import { theme } from 'lib/theme'
import { useWindowSize } from 'react-use'
import snackBarOptions, { darkToast } from './config'

export const useOptions = () => {
  const { width } = useWindowSize()
  const isMobile = !!(width && width <= Number(theme.maxWidths.xsmall.value))
  return isMobile ? snackBarOptions : darkToast
}
