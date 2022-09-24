import React from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Style from '../styles/LoansStyle.module.scss'
import Currency from '../components/Currency'
import CustomerLoan from '../components/CustomerLoan'

export default function Loans({ imgSrc, title }) {
    return (
        <div className={Style.loans}>
            <div className={Style.promoCard}>
                
                <CustomerLoan
                    imgSrc="/photo.jpg"
                    title="აიღე სამომხმარებლო სესხი მარტივად"
                />
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
