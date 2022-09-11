import React from 'react'

import Style from './Style.module.scss'

export default function PromoCard({ imgSrc, title }) {
  return (
    <div className={Style.promoCard}>
        <img src={imgSrc} alt="" />
        <h3>{title}</h3>
    </div>
  )
}
