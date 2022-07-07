import { RefObject, useEffect, useCallback } from 'react'

export const useHorizontalDragToScroll = (
  ref: RefObject<HTMLDivElement>,
  speed?: number
) => {
  const handleDrag = useCallback(
    (el: HTMLElement) => {
      let isDown = false
      let startX: number
      let scrollLeft: number

      el.addEventListener('mousedown', (e) => {
        isDown = true
        el.style.cursor = 'grabbing'
        startX = e.pageX - el.offsetLeft
        scrollLeft = el.scrollLeft
      })

      el.addEventListener('mouseleave', () => {
        isDown = false
        el.style.cursor = 'grab'
      })

      el.addEventListener('mouseup', () => {
        isDown = false
        el.style.cursor = 'grab'
      })

      el.addEventListener('mousemove', (e) => {
        if (!isDown) return
        e.preventDefault()
        const x = e.pageX - el.offsetLeft
        const walk = (x - startX) * (speed === undefined ? 2 : speed)
        el.scrollLeft = scrollLeft - walk
        console.log(walk)
      })
    },
    [speed]
  )

  useEffect(() => {
    if (ref.current) {
      handleDrag(ref.current)
    }
  }, [handleDrag, ref])
}
