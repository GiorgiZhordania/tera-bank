import Head from 'next/head'
import Header from '../components/Header'
import HomeSlider from '../components/HomeSlider'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Tera Bank</title>
       
      </Head>
      <Header/>
      <HomeSlider />

      <main >
        main
      </main>

      <footer >
        footer
      </footer>
    </div>
  )
}
