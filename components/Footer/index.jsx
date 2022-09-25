import React from 'react'
import { FaFacebookSquare, FaTwitterSquare, FaYoutube, FaInstagram } from 'react-icons/fa'
import FooterNavigation from '../FooterNavigation'


import Style from './Style.module.scss'

export default function Footer() {
  return (
    <footer className={Style.footer}>
        <div className={Style.logos}>
            <div style={{ backgroundImage: "url(/logo-gray.png)" }} />
            <span>
                <FaFacebookSquare size="30px"  />
                <FaTwitterSquare size="30px"  />
                <FaYoutube size="30px"  />
                <FaInstagram size="30px"  />
            </span>
        </div>
        <FooterNavigation title='ჩვენს შესახებ' items={['საკონტაქტო ინფორმაცია', 'ჩვენი გუნდი', 'ტერაბანკის ისტორია']}/>
        <FooterNavigation title='წესები და პირობები' items={['კონფიდენციალურობის დაცვა', 'ცვლილებები', 'შეზღუდვები','დავების გადაწყვეტა','ვებ-გვერდის წესები და პირობები']}/>
        <FooterNavigation title='ტერაბანკი' items={['ვაკანსიები', 'ფილიალების ქსელი', 'შეგვაფასეთ','კიბერუსაფრთხოება','ხელშეკრულებები']}/>
    </footer>
  )
}
