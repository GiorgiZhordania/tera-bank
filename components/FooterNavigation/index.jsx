import React from 'react'
import Style from './Style.module.scss'

export default function FooterNavigation({ title, items }) {
    return (
        <div className={Style.nav}>
            <h3>{title}</h3>
            <ul>
                {items.map((item) => (
                    <li key={item}>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    )
}
