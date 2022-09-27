import React from 'react'

import Link from 'next/link'
import Style from './Style.module.scss'


export default function CustomerLoan({ imgSrc, title }) {
  return (
    <div className={Style.CustomerLoan}>
      <Link href='https://terabank.ge/ge/retail/loans/consumer-loans'>
        <img src={imgSrc} alt="" />
      </Link>
      <h3>{title}</h3>

    </div>
  )
}
