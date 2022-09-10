import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { MdPerson, MdSearch } from "react-icons/md";

import Button from '../Button'

import Style from "./Style.module.scss"


export default function Header() {
  return (
    <header className={Style.header}>
      <Link href="/">
        <Image src="/logo.png" alt="Logo" width={170} height={50} />
      </Link>
      <nav className={Style.nav}>
        <a>ჩემთვის</a>
        <a>ბიზნესისთვის</a>
      </nav>
      <div className={Style.actions}>
        <Button>ტერაPAY</Button>
        <Button>ინტერნეტ ბანკი</Button>
        <MdSearch color="#971D62" size={30} />
        <MdPerson color="#971D62" size={30} />
      </div>
    </header>

  )

}
