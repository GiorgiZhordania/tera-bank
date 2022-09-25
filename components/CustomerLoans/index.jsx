import React from 'react'
import Style from './Style.module.scss'

export default function CustomerLoans({ imgSrc, title }) {
  return (
    <div className={Style.CustomerLoans}>
        <img src={imgSrc} alt="" />
        <h3>{title}</h3>
    </div>
  )
}
