import React from 'react'
import Style from './Style.module.scss'

export default function Button({ children, onClick }) {
  return (
    <button className={Style.button} onClick={onClick}>{children}</button>
  )
}
