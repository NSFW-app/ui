import { useEffect, useRef } from 'react'

export const useHasRunFirstRender = () => {
  const hasRunFirstRender = useRef<boolean>(false)

  useEffect(() => {
    hasRunFirstRender.current = true
  }, [])

  return hasRunFirstRender.current
}
