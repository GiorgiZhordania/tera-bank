import React from 'react'
import Style from './Style.module.scss'

export default function SectionTitle({title, actionTitle}) {
  return (
    <div className={Style.sectionTitle}>
        <h3>{title}</h3>
        <a>{actionTitle}</a>
    </div>
  )
}
