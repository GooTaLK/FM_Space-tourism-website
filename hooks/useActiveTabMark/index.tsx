import { useRef, type RefObject } from 'react'
import ActiveTabMark from './activeTabMark'

type Direction = 'horizontal' | 'vertical'

function moveActiveBarToTabPosition({
  activeBarRef,
  tab,
  direction = 'horizontal',
}: {
  activeBarRef: RefObject<HTMLElement>
  tab: string
  direction: Direction
}) {
  const containerDOMRef = activeBarRef.current?.parentElement
  const tabDOMRef = containerDOMRef?.querySelector(`[data-tab-name='${tab}']`)
  if (!containerDOMRef || !tabDOMRef) return

  const { top, left, width, height } = tabDOMRef.getBoundingClientRect()
  const containerLeftOffset = containerDOMRef.offsetLeft
  const containerTopOffset = containerDOMRef.offsetTop
  const x = left - containerLeftOffset
  const y = top - containerTopOffset

  if (direction === 'horizontal') {
    activeBarRef.current.style.setProperty('--x', `${x}px`)
    activeBarRef.current.style.setProperty('--width', `${width}px`)
    activeBarRef.current.dataset.activeTabMark = 'horizontal'
  } else {
    activeBarRef.current.style.setProperty('--y', `${y}px`)
    activeBarRef.current.style.setProperty('--height', `${height}px`)
    activeBarRef.current.dataset.activeTabMark = 'vertical'
  }
}

function useActiveTabMark(initialDirection: Direction) {
  const activeBarRef = useRef<HTMLDivElement>(null)

  return {
    ActiveBar: (
      <ActiveTabMark reference={activeBarRef} direction={initialDirection} />
    ),
    updatePosition: (tab: string, direction: Direction) => {
      moveActiveBarToTabPosition({ activeBarRef, direction, tab })
    },
  }
}

export default useActiveTabMark
