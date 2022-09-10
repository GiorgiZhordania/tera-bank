import React from 'react'

import Style from './Style.module.scss'

export default function Slide({ imageSrc, title }) {
  return (
    <div className={Style.slide}>
        <h3>{title}</h3>
        <img src={imageSrc} alt="" />
    </div>
  )
}
