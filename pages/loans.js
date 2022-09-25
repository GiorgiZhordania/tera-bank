import React from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Style from '../styles/LoansStyle.module.scss'
import Currency from '../components/Currency'
import CustomerLoan from '../components/CustomerLoan'
import SectionTitle from '../components/SectionTitle';
import CustomerLoans from '../components/CustomerLoans';
import PromoCard from '../components/PromoCard';

export default function Loans({ imgSrc, title }) {
    return (
        <div className={Style.loans}>
            <div className={Style.CustomerLoan}>
                <CustomerLoan 
                imgSrc="/photo.jpg" 
                title="აიღე სამომხმარებლო სესხი მარტივად"/>
            </div>
            <br></br>

            <section className={Style.loanss}>
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

            <div className={Style.CustomerLoan}>
                <CustomerLoan 
                imgSrc="/smile.jpg" 
                />
            </div>
            <br></br>
            <div className={Style.CustomerLoans}>
                <CustomerLoan 
                imgSrc="/car.jpg" 
                title="შეიძინე მანქანა
                ტერაბანკის ავტოგანვადებით"/>
            </div>
            <br></br>
            <div className={Style.currency}>
                <Currency />
                <Currency />
            </div>
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
