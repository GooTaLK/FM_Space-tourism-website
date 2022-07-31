import Head from 'next/head'
import { ReactElement } from 'react'
import { type Tab } from './nav'
import Header from './header'

type LayoutProps = {
  children: ReactElement
  pageName: Tab
  title?: string
}

function Layout({ children, pageName, title }: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title ? `Space Tourism | ${title}` : 'Space Tourism'}</title>
        <link
          rel='icon'
          href='/assets/favicon-32x32.png'
          type='image/png'
          sizes='32x32'
        />
      </Head>

      <Header pageName={pageName} />
      <main>{children}</main>
    </>
  )
}

export default Layout
