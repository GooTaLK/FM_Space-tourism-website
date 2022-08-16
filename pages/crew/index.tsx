import { MouseEventHandler, useRef, useState } from 'react'
import cn from 'classnames'
import styles from './Crew.module.css'
import utilsStyles from '@/styles/utils.module.css'
import type { NextPageWithTitle } from '../_app'
import Background from '@/components/background'
import CrewCard from '@/components/crewCard'
import data from '@/data/data.json'

type Crewmate =
  | 'Douglas Hurley'
  | 'Mark Shuttleworth'
  | 'Victor Glover'
  | 'Anousheh Ansari'

type CrewStates = {
  currentCrewmate: Crewmate
}

type CrewData = {
  name: string
  images: {
    png: string
    webp: string
  }
  role: string
  bio: string
}

const crewmates = [
  'Douglas Hurley',
  'Mark Shuttleworth',
  'Victor Glover',
  'Anousheh Ansari',
]

const Crew: NextPageWithTitle = () => {
  const crewDataRef = useRef<CrewData[]>(data.crew)
  const crewDataIndexRef = useRef(0)
  const [currentCrewmate, setCurrentCrewmate] =
    useState<CrewStates['currentCrewmate']>('Douglas Hurley')

  function getCrewData(
    property: keyof CrewData,
    property2?: keyof CrewData['images']
  ) {
    if (property === 'images') {
      if (property2) {
        return crewDataRef.current[crewDataIndexRef.current][property][
          property2
        ]
      }
      return 'No image defined'
    }

    return crewDataRef.current[crewDataIndexRef.current][property]
  }

  const handleClickTab: MouseEventHandler<HTMLLIElement> = ({
    currentTarget,
  }) => {
    const tabName = currentTarget.dataset.tabName
    if (!tabName) return

    if (confirmCrewmateType(tabName)) {
      const newIndex = crewDataRef.current.findIndex(
        ({ name }) => name === tabName
      )

      crewDataIndexRef.current = newIndex !== -1 ? newIndex : 0
      setCurrentCrewmate(tabName)
    }
  }

  return (
    <>
      <Background
        src={{
          desktop: '/assets/crew/background-crew-desktop.jpg',
          tablet: '/assets/crew/background-crew-tablet.jpg',
          mobile: '/assets/crew/background-crew-mobile.jpg',
        }}
      />
      <div className={cn(styles.container, utilsStyles.pageContainer)}>
        <header
          className={cn(
            utilsStyles.heading5,
            utilsStyles.uppercase,
            utilsStyles.pageHeaderContainer
          )}
        >
          <span className={utilsStyles.pageHeaderIndex}>02</span>Meet your crew
        </header>
        <nav className={styles.nav}>
          <ul>
            <li
              className={
                currentCrewmate === 'Douglas Hurley' ? styles.active : undefined
              }
              data-tab-name='Douglas Hurley'
              onClick={handleClickTab}
            />
            <li
              className={
                currentCrewmate === 'Mark Shuttleworth'
                  ? styles.active
                  : undefined
              }
              data-tab-name='Mark Shuttleworth'
              onClick={handleClickTab}
            />
            <li
              className={
                currentCrewmate === 'Victor Glover' ? styles.active : undefined
              }
              data-tab-name='Victor Glover'
              onClick={handleClickTab}
            />
            <li
              className={
                currentCrewmate === 'Anousheh Ansari'
                  ? styles.active
                  : undefined
              }
              data-tab-name='Anousheh Ansari'
              onClick={handleClickTab}
            />
          </ul>
        </nav>
        <CrewCard
          imageSrc={{
            default: getCrewData('images', 'png'),
            sources: [
              {
                srcSet: getCrewData('images', 'png'),
              },
              {
                srcSet: getCrewData('images', 'png'),
              },
            ],
          }}
          crewmateName={currentCrewmate}
          crewmateRole={getCrewData('role')}
          bio={getCrewData('bio')}
        />
      </div>
    </>
  )
}

Crew.title = 'Crew'

function confirmCrewmateType(crewmate: string): crewmate is Crewmate {
  return crewmates.includes(crewmate)
}

export default Crew
