import { useCallback, useEffect } from 'react'

export const useOnKeyDown = ({
  key,
  action,
}: {
  key: string
  action: () => void
}) => {
  const runAction = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === key) {
        action()
      }
    },
    [action, key]
  )

  useEffect(() => {
    document.addEventListener('keydown', runAction, false)

    return () => {
      document.removeEventListener('keydown', runAction, false)
    }
  }, [runAction])
}
