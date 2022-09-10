import React from 'react'
import Style from './Style.module.scss'

export default function Button({ children }) {
  return (
    <button className={Style.button}>{children}</button>
  )
}
