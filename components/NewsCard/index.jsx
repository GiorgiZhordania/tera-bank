import React from 'react'

import Style from './Style.module.scss'

export default function NewsCard({
  imgSrc,
  date,
  title,
}) {
  return (
    <div className={Style.news}>
      <div className={Style.image}>
        <img src={imgSrc} alt="" />
      </div>
      <p>{date}</p>
      <h3>{title}</h3>
    </div>
  )
}


