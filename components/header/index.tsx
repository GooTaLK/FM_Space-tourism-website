import styles from './header.module.css'
import Image from 'next/image'
import Link from 'next/link'
import Nav, { type Tab } from '../nav'

function Header({ pageName }: { pageName: Tab }) {
  return (
    <header className={styles.header}>
      <Link href='/'>
        <a className={styles.logo}>
          <Image
            src='/assets/shared/logo.svg'
            alt='Space Tourism logo'
            width={48}
            height={48}
          />
        </a>
      </Link>
      <div className={styles.line} />
      <Nav tab={pageName} />
    </header>
  )
}

export default Header
