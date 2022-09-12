import Head from 'next/head'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Currency from '../components/Currency'
import Header from '../components/Header'
import HomeSlider from '../components/HomeSlider'
import NewsCard from '../components/NewsCard'
import PromoCard from '../components/PromoCard'
import SectionTitle from '../components/SectionTitle'
import CustomerLoan from '../components/CustomerLoan';

import Style from '../styles/IndexPageStyle.module.scss'
import { MdPhoto } from 'react-icons/md';

export default function Home() {
  return (
    <div >
      <Head>
        <title>Tera Bank</title>

      </Head>
      <Header />
      <HomeSlider />
      <main className={Style.main}>
        <section className={Style.loans}>
          <SectionTitle title="იპოთეკური სესხები" actionTitle="იხილეთ ყველა" />
          <br />

          <div className={Style.loansList}>
            <PromoCard
              imgSrc="/Mask.jpg"
              title="შეიძინე ბინა ისარგებლე სუბსიდიით"
            />
            <PromoCard
              imgSrc="/chair.jpg"
              title="იპოთეკური სესხი 12%-დან"
            />
          </div>
        </section>
        <section className={Style.loans}>
          <SectionTitle title="პლასტიკური ბარათები" actionTitle="იხილეთ ყველა" />
          <br />

          <div className={Style.loansList}>
            <PromoCard
              imgSrc="/blackvisa.jpg"
              title="უნივერსალური ბარათი ყველა შემთხვევისთვის"
            />
            <PromoCard
              imgSrc="/goldvisa.jpg"
              title="ვიზა ბარათები გახდი სოლიდური"
            />
          </div>
        </section>
        <section className={Style.news}>
          <SectionTitle title="სიახლეები" actionTitle="იხილეთ ყველა" />
          <br />

          <div className={Style.newsList}>
            <NewsCard
              imgSrc="/go.jpg"
              title="მივდივართ საქართველოში — ტერაბანკი კვლავაც შიდა ტურიზმის მხარდასაჭერად"
              date="3 აგვისტო, 2020"
            />
            <NewsCard
              imgSrc="/influencer.jpg"
              title="ტერა ბოტინი ვერცხლის პრიზიორია - ინოვაციური ბოტის კამპანიამ საერთაშორისო ჯილდო მიიღო"
              date="2 აგვისტო, 2020"
            />
            <NewsCard
              imgSrc="/table.jpg"
              title="სუბსიდირებული იპოთეკური კრედიტების მხარდაჭერის სახელმწიფო პროგრამა"
              date="27 ივლისი, 2020"
            />
            <NewsCard
              imgSrc="/colored.jpg"
              title="ტერაბანკის ინიციატივა ბიზნესკლიენტების მხარდასაჭერად"
              date="20 ივლისი, 2020"
            />
          </div>
        </section>
        <section>
          <SectionTitle title="საუკეთესო კურსი" />
          <br />

          <div className={Style.currencyList}>
            <Currency />
            <Currency />
          </div>
        </section>
        <section>
          <SectionTitle title="სამომხმარებლო სესხი" />
          <br/>
          <div>
            <CustomerLoan
             imgSrc="/photo.jpg"
             title="აიღე სამომხმარებლო
              სესხი მარტივად"
              />
          </div>
        </section>
      </main>

      <footer >
        footer
      </footer>
    </div>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}
