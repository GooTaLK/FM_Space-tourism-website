import { type RefObject, useRef } from 'react'
import { useLayoutEffect } from '@/hooks/useIsomorphicLayoutEffect'

export function useResizeObserver(
  action: (c: any) => void,
  ref: RefObject<HTMLElement> | RefObject<HTMLElement>[]
) {
  const resizer = useRef<ResizeObserver>(
    (() => {
      if (typeof window === 'undefined') return null

      return new window.ResizeObserver((entries) => {
        for (const entry of entries) {
          if (entry.contentBoxSize) {
            const contentBoxSize = Array.isArray(entry.contentBoxSize)
              ? entry.contentBoxSize[0]
              : entry.contentBoxSize
            action(contentBoxSize)
          } else {
            action(entry.contentRect)
          }
        }
      })
    })()
  )

  useLayoutEffect(() => {
    const resizerCopy = resizer.current
    if (resizerCopy === null) return

    if (Array.isArray(ref)) {
      ref.forEach(({ current }) => current && resizerCopy.observe(current))
    } else if (ref.current) {
      resizerCopy.observe(ref.current)
    }

    return () => resizerCopy.disconnect()
  }, [ref])

  return resizer
}
