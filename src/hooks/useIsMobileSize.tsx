import { defaultTheme } from 'core/stitches/themes/default'
import { useViewportSize } from '@mantine/hooks'

const { theme } = defaultTheme

export const useIsMobileSize = () => {
  const { width } = useViewportSize()
  return !!(width && width < Number(theme.maxWidths.large.value))
}
