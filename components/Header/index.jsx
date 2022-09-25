import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { MdPerson, MdSearch } from "react-icons/md";
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

import Button from '../Button'

import Style from "./Style.module.scss"

export default function Header(props) {
  const { t } = useTranslation('common')
  const router = useRouter()

  const changeLang = () => {
    router.push({
      route: router.pathname,
      query: router.query
  }, router.asPath, { locale: router.locale === "ka" ? "en" : "ka" });
  }

  return (
    <header className={Style.header}>
      <Link href="/">
        <Image className={Style.img} src="/logo.png" alt="Logo" width={170} height={50} />
      </Link>
      <nav className={Style.nav}>
        <Link href='/loans'>{t('loans')}</Link>
        <Link href='/customer-loans'>{t('customerLoans')}</Link>
        <Link href='/contact'>{t('contact')}</Link>
      </nav>
      <div className={Style.actions}>
        <Button>{t('teraPay')}</Button>
        <Button>{t('internetBank')}</Button>
        <MdSearch className={Style.search} color="#971D62" size={30} />
        <MdPerson className={Style.person} color="#971D62" size={30} />
        <Button onClick={changeLang}>
          {router.locale === "ka" ? "EN" : "KA"}
        </Button>
      </div>
    </header>

  )

}
