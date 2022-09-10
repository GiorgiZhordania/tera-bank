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
            imgSrc="./go.jpg" 
            title="მივდივართ საქართველოში — ტერაბანკი კვლავაც შიდა ტურიზმის მხარდასაჭერად"
            date="3 აგვისტო, 2020"
          />
          <NewsCard 
            imgSrc="./influencer.jpg" 
            title="ტერა ბოტინი ვერცხლის პრიზიორია - ინოვაციური ბოტის კამპანიამ საერთაშორისო ჯილდო მიიღო"
            date="2 აგვისტო, 2020"
          />
          <NewsCard 
            imgSrc="./table.jpg" 
            title="სუბსიდირებული იპოთეკური კრედიტების მხარდაჭერის სახელმწიფო პროგრამა"
            date="27 ივლისი, 2020"
          />
          <NewsCard 
            imgSrc="./colored.jpg" 
            title="ტერაბანკის ინიციატივა ბიზნესკლიენტების მხარდასაჭერად"
            date="20 ივლისი, 2020"
          />
        </div>
      </main>

      <footer >
        footer
      </footer>
    </div>
  )
}
