import React from 'react'
import Style from './Style.module.scss'

export default function ListItem({text,icon}) {
  return (
    <div className={Style.list}>
      <span>{icon}</span>
      <p>{text}</p>
    </div>
  )
}
