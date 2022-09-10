import Head from 'next/head'
import Header from '../components/Header'
import HomeSlider from '../components/HomeSlider'
import SectionTitle from '../components/SectionTitle'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Tera Bank</title>
       
      </Head>
      <Header/>
      <HomeSlider />

      <SectionTitle title="იპოთეკური სესხები" actionTitle="იხილეთ ყველა" />

      <footer >
        footer
      </footer>
    </div>
  )
}
