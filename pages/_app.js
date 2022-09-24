import { appWithTranslation } from 'next-i18next';
import Head from 'next/head'
import Footer from '../components/Footer';
import Header from '../components/Header'

import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Tera Bank</title>

      </Head>
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  )
}

export default appWithTranslation(MyApp)
