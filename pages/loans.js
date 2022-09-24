import React from 'react'
import Style from '../styles/LoansStyle.module.scss'
import Currency from '../components/Currency'

export default function Loans() {
    return (
        <div className={Style.loans}>Loans
            <div className={Style.currency}>
                <Currency />
                <Currency />
            </div>
        </div>

    )
}
