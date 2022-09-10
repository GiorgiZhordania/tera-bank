import Head from 'next/head'
import Header from '../components/Header'
import HomeSlider from '../components/HomeSlider'
import NewsCard from '../components/NewsCard'
import SectionTitle from '../components/SectionTitle'

import Style from '../styles/IndexPageStyle.module.scss'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Tera Bank</title>
       
      </Head>
      <Header/>
      <HomeSlider />

      <main className={Style.main}>
        <SectionTitle title="სიახლეები" actionTitle="იხილეთ ყველა" />

        <div className={Style.newsList}>
          <NewsCard 
            imgSrc="https://images.pexels.com/photos/13046522/pexels-photo-13046522.jpeg" 
            title="მივდივართ საქართველოში — ტერაბანკი კვლავაც შიდა ტურიზმის მხარდასაჭერად"
            date="3 აგვისტო, 2020"
          />
          <NewsCard 
            imgSrc="https://images.pexels.com/photos/13046522/pexels-photo-13046522.jpeg" 
            title="მივდივართ საქართველოში — ტერაბანკი კვლავაც შიდა ტურიზმის მხარდასაჭერად"
            date="3 აგვისტო, 2020"
          />
          <NewsCard 
            imgSrc="https://images.pexels.com/photos/13046522/pexels-photo-13046522.jpeg" 
            title="მივდივართ საქართველოში — ტერაბანკი კვლავაც შიდა ტურიზმის მხარდასაჭერად"
            date="3 აგვისტო, 2020"
          />
          <NewsCard 
            imgSrc="https://images.pexels.com/photos/13046522/pexels-photo-13046522.jpeg" 
            title="მივდივართ საქართველოში — ტერაბანკი კვლავაც შიდა ტურიზმის მხარდასაჭერად"
            date="3 აგვისტო, 2020"
          />
        </div>
      </main>

      <footer >
        footer
      </footer>
    </div>
  )
}
