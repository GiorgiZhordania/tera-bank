import React from 'react'

import Style from './Style.module.scss'

import Link from 'next/link'

export default function PromoCard({ imgSrc, title }) {
  return (
    <div className={Style.promoCard}>
      <Link href='https://terabank.ge/ge/retail/loans/mortgage-loans'>
        <img src={imgSrc} alt="" />
      </Link>
      <h3>{title}</h3>
    </div>
  )
}
