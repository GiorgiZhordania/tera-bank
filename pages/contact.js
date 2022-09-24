import React from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import {MdLocationOn, MdPhone, MdMailOutline} from 'react-icons/md'

import Style from '../styles/ContactStyle.module.scss'
import SectionTitle from '../components/SectionTitle';
import Select from '../components/Select';
import ListItem from '../components/ListItem';

export default function Contact() {
  return (
    <div className={Style.contact}>
      <SectionTitle title="ფილიალები რუკაზე" />
      <div className={Style.main}>
        <div className={Style.map}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2977.831125761983!2d44.768722515356146!3d41.72416278301251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x404472d8d7e180d5%3A0x40178df24b555584!2sTera%20Bank!5e0!3m2!1sen!2sge!4v1664035759316!5m2!1sen!2sge"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className={Style.contents}>
          <div className={Style.selects}>
            <span>
              <h4>ფილიალის ძებნა</h4>
              <Select />
            </span>
            <span>
              <h4>ბანკომატის ძებნა</h4>
              <Select />
            </span>
          </div>
          <div className={Style.centralOffice}>
            <h3>სათაო ოფისის მისამართი</h3>
            <ListItem icon={<MdLocationOn/>} text='თბილისი, წმ. ქეთევან  დედოფლის გამზ. 3' />
            <ListItem icon={<MdPhone/>} text='(+995 32) 255 00 00' />
            <ListItem icon={<MdPhone/>} text='მობილურიდან: * 50 50' />
            <ListItem icon={<MdMailOutline/>} text='info@terabank.ge' />
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}
