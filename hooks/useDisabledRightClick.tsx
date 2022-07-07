import { MutableRefObject, RefObject, useEffect } from 'react'

// Disabling right click context menu for a first step at preventing content download
export const useDisabledRightClick = (
  selector: string,
  ref?: MutableRefObject<HTMLElement | undefined> | RefObject<HTMLDivElement>
) => {
  useEffect(() => {
    const parent = ref ? ref.current : document
    if (parent) {
      parent
        .querySelectorAll(selector)
        .forEach(
          (img) => ((img as HTMLImageElement).oncontextmenu = () => false)
        )
    }
  }, [selector, ref])
}
