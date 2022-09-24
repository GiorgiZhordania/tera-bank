import React from 'react'

import Style from './Style.module.scss'

export default function Select() {
    return (
        <select className={Style.select} name="city" id="city">
            <option value="default">ქალაქი/რეგიონი</option>
            <option value="tbilisi">თბილისი</option>
            <option value="kutaisi">ქუთაისი</option>
            <option value="batumi">ბათუმი</option>
        </select>
    )
}
