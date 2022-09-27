import React from 'react'
import Button from '../Button'
import Style from './Style.module.scss'
import { FaGooglePlay, FaApple } from 'react-icons/fa'

import Link from 'next/link'


export default function MobileApp({ imgSrc, title, text }) {
    return (
        <div className={Style.app}>
            <div className={Style.text}>
                <h3>{title}</h3>
                <br></br>
                <p>{text}</p>
                <br></br>
                <div className={Style.appButton}>
                    <Link href='https://play.google.com/store/apps/details?id=mobility.ge.terabank'>
                        <Button type='dark' addon={<FaGooglePlay />}>Google Play</Button>
                    </Link>
                    <Link href='https://apps.apple.com/us/app/terabank-mobile-banking/id1031542190'>
                        <Button type='dark' addon={<FaApple />}>App Store</Button>
                    </Link>
                </div>
            </div>
            <div className={Style.photo} style={{ backgroundImage: `url(${imgSrc})` }} />
        </div>
    )
}
