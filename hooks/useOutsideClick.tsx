import { RefObject, useEffect, useCallback } from 'react'

export const useOutsideClick = (
  ref: RefObject<HTMLElement>,
  callback: () => void
) => {
  const handleClick = useCallback(
    (e: globalThis.MouseEvent) => {
      if (ref?.current && !ref.current.contains(e.target as HTMLElement)) {
        callback()
      }
    },
    [callback, ref]
  )

  useEffect(() => {
    document.addEventListener('click', handleClick)
    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [handleClick])
}
