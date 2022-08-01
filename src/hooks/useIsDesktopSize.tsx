import { defaultTheme } from 'core/stitches/themes/default'
import { useViewportSize } from '@mantine/hooks'

const { theme } = defaultTheme

// Use the initial value with SSR to set what you want the server to render. Then when window is available,
// this hook will update. Doing this prevent SSR diff errors.
export const useIsDesktopSize = (initial = false) => {
  const { width } = useViewportSize()
  return typeof window !== 'undefined'
    ? !!(width && width >= Number(theme.maxWidths.large.value))
    : initial
}
