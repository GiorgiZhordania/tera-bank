import React from 'react'

import Style from './Style.module.scss'

export default function CustomerLoan({ imgSrc, title}) {
  return (
    <div className={Style.CustomerLoan}>
        <img src={imgSrc} alt="" />
        <h3>{title}</h3>
    </div>
  )
}
