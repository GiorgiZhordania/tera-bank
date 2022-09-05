import React from 'react'
import Style from "./Style.module.scss" 


export default function Header() {
  return (
    <header className={Style.header} >
    <nav class='navigation'>
        <a>tera bank</a>
        <a>ჩემთვის</a>
        <a>ბიზნესისთვის</a>
        <a>ტერაPay</a>
        <a>ინტერნეტბანკი</a>
    </nav>
    </header>

  )
  
}
