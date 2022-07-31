import '@/styles/globals.css'
import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import Layout from '@/components/layout'
import { confirmTabType } from '@/components/nav'

type NextPageWithTitle = NextPage & {
  title?: string
}

type AppPropsWithTitle = AppProps & {
  Component: NextPageWithTitle
}

function MyApp({ Component, pageProps }: AppPropsWithTitle) {
  const componentName = Component.name.toLowerCase()

  return (
    <Layout
      pageName={confirmTabType(componentName) ? componentName : 'home'}
      title={Component.title}
    >
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
export { type NextPageWithTitle }
