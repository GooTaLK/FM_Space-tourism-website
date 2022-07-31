import { type RefObject, useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import cn from 'classnames'
import styles from './nav.module.css'
import { useResizeObserver } from '@/hooks/useResizeObserver'

type Tab = 'home' | 'destination' | 'crew' | 'technology'

const tabNames = ['Home', 'Destination', 'Crew', 'Technology']
let currentTab: Tab

function Nav({ tab }: { tab: Tab }) {
  const activeBarRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  currentTab = tab

  function handleOpenIconClick() {
    setIsMenuOpen(!isMenuOpen)
  }

  useResizeObserver((contentRect) => {
    const isMobileScreen = (contentRect.width ?? contentRect.inlineSize) < 300

    if (isMobileScreen) {
      moveActiveBarToTabPosition(activeBarRef, 'vertical')
      setIsMenuOpen(false)
    } else {
      moveActiveBarToTabPosition(activeBarRef, 'horizontal')
    }
  }, containerRef)

  useEffect(() => {
    const isVertical = window.innerWidth < 768
    moveActiveBarToTabPosition(
      activeBarRef,
      isVertical ? 'vertical' : 'horizontal'
    )
  }, [tab])

  return (
    <>
      <div
        className={cn(styles.container, { [styles.open]: isMenuOpen })}
        ref={containerRef}
      >
        <nav className={styles.nav}>
          <ul>
            {tabNames.map((name, index) => {
              const tabName = name.toLowerCase()

              return (
                <li
                  className={tab === tabName ? 'active' : undefined}
                  data-nav-tab={tabName}
                  key={index}
                >
                  <Link href={tabName === 'home' ? '/' : `/${tabName}`}>
                    <a className={styles.link}>
                      <span className={styles.index}>0{index}</span>
                      {name}
                    </a>
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
        <div className={styles.activeBar} ref={activeBarRef} />
      </div>
      <div
        className={cn(styles.openIcon, {
          [styles['openIcon--cross']]: isMenuOpen,
        })}
        onClick={handleOpenIconClick}
      >
        <span />
      </div>
    </>
  )
}

function moveActiveBarToTabPosition(
  activeBarRef: RefObject<HTMLElement>,
  direction: 'horizontal' | 'vertical' = 'horizontal'
) {
  console.log(currentTab)
  const containerDOMRef = activeBarRef.current?.parentElement
  const tabDOMRef = containerDOMRef?.querySelector(
    `[data-nav-tab='${currentTab}']`
  )
  if (!containerDOMRef || !tabDOMRef) return

  console.log(direction)
  const { top, left, width, height } = tabDOMRef.getBoundingClientRect()
  const containerLeftOffset = containerDOMRef.offsetLeft
  const containerTopOffset = containerDOMRef.offsetTop
  const x = left - containerLeftOffset
  const y = top - containerTopOffset

  if (direction === 'horizontal') {
    activeBarRef.current?.style.setProperty('--x', `${x}px`)
    activeBarRef.current?.style.setProperty('--width', `${width}px`)
  } else {
    activeBarRef.current?.style.setProperty('--y', `${y}px`)
    activeBarRef.current?.style.setProperty('--height', `${height}px`)
  }
}

function confirmTabType(name?: string): name is Tab {
  if (typeof name === 'undefined') return false
  if (tabNames.includes(name)) return true

  return false
}

export default Nav
export { type Tab, confirmTabType }
