import React from 'react'
import Style from './Style.module.scss'

export default function Button({ children, onClick, type = 'default', addon}) {
  return (
    <button
      className={`${Style.button} ${type === 'default' ? Style.default : Style.dark}`}
      onClick={onClick}
    >
      {addon && <div className={Style.addon}>{addon}</div>}
     <div>
      {children}
     </div> 
    </button>
  )
}
