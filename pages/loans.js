import React from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Style from '../styles/LoansStyle.module.scss'
import Currency from '../components/Currency'

export default function Loans() {
    return (
        <div className={Style.loans}>Loans
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
  