import React, { useState } from 'react'
import Style from './Style.module.scss'

export default function Currency() {
    const currencies = [
        {
            uid: "USD",
            buy: 3.1,
            sell: 2.8,
            imgSrc: "/usa.png",
        },
        {
            uid: "EUR",
            buy: 3.3,
            sell: 2.9,
            imgSrc: "/euro.png",
        },
        {
            uid: "GEL",
            buy: 1,
            sell: 1,
            imgSrc: "/georgia.png",
        },
        {
            uid: "GBP",
            buy: 3.4,
            sell: 3.2,
            imgSrc: "/gb.webp",
        },
    ]
    const [activeTabUid, setActiveTabUid] = useState(currencies[0].uid)

    const findActiveTab = () => {
        const activeTab = currencies.find((item) => item.uid === activeTabUid)

        return activeTab
    }
    1
    return (
        <div className={Style.currency}>
            <header>
                <h3>ტერაბანკი(სპეც კურსი)</h3>
                <ul>
                    {
                        currencies.map((item) => (
                            <li key={item.uid} onClick={() => setActiveTabUid(item.uid)}>
                                {item.uid}
                                {item.uid === activeTabUid && <span />}
                            </li>
                        ))
                    }
                </ul>
            </header>
            <main>
                <aside>
                    <img src={findActiveTab().imgSrc} alt='' />
                </aside>
                <ul>
                    <li>
                        <h4>ყიდვა</h4>
                        <p>{findActiveTab().buy}</p>
                    </li>
                    <li>
                        <h4>გაყიდვა</h4>
                        <p>{findActiveTab().sell}</p>
                    </li>
                </ul>
            </main>
        </div>
    )
}
