import React from 'react'
import Button from '../Button'
import Style from './Style.module.scss'
import {FaGooglePlay,FaApple} from 'react-icons/fa'


export default function MobileApp({imgSrc,title,text}) {
  return (
    <div className={Style.app}>
        <div className={Style.text}>
            <h3>{title}</h3>
            <p>{text}</p>
            <Button type='dark' addon={<FaGooglePlay/>} >Google Play</Button> 
            <Button type='dark' addon={<FaApple/>}>Google Play</Button>
        </div>
        <div className={Style.photo}>
            <img src={imgSrc} alt="" />
        </div>
    </div>
     )
}
