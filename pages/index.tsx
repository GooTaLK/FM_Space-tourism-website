import styles from '@/styles/Home.module.css'
import utilsStyles from '@/styles/utils.module.css'
import type { NextPageWithTitle } from './_app'
import cn from 'classnames'
import Background from '@/components/background'

const Home: NextPageWithTitle = () => {
  return (
    <>
      <Background
        src={{
          desktop: '/assets/home/background-home-desktop.jpg',
          tablet: '/assets/home/background-home-tablet.jpg',
          mobile: '/assets/home/background-home-mobile.jpg',
        }}
        alt='The Earth planet'
      />
      <div className={styles.container}>
        <header className={styles.hero}>
          <h2 className={cn(utilsStyles.heading5, utilsStyles.grayText)}>
            SO, YOU WANT TO TRAVEL TO
          </h2>
          <h1 className={utilsStyles.heading1}>SPACE</h1>
          <p className={cn(utilsStyles.grayText, utilsStyles.bodyText)}>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </header>
        <button className={styles.button}>
          <span className={utilsStyles.heading4}>EXPLORE</span>
        </button>
      </div>
    </>
  )
}

export default Home
