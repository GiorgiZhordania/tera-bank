import React from 'react'

import Button from '../Button'

import Style from "./Style.module.scss" 


export default function Header() {
  return (
    <header className={Style.header} >
    <nav className={Style.nav}>
        <a>tera bank</a>
        <a>ჩემთვის</a>
        <a>ბიზნესისთვის</a>
        <Button>თერა ფეი</Button>
        <Button>ინტერნეტ ბანკი</Button>
    </nav>
    </header>

  )
  
}
