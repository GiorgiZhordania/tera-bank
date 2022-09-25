import React from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { MdLocationOn,MdLaptop,MdHeadsetMic } from 'react-icons/md'

import Styles from '../styles/CustomerLoans.module.scss'
import Button from '../components/Button';

export default function CustomerLoans() {
    return (
        <div className={Styles.customerLoans}>
            <h2>სწრაფი დახმარება ფინანსური სახლისგან!</h2>
            <p>
                რასაც ისურვებ, შენი გახდება - ზღაპრულ დაპირებას  ჰგავს, მაგრამ რეალობაა. მხოლოდ ერთხელ გამოთქვი სურვილი ტერაბანკში და ნებისმიერი ნივთი, რომელიც მოგეწონება, შენი გახდება. საოცნებო მოგზაურობასაც დავაფინანსებთ.
                <br /><br />
                დაგეხმარები  იმ შემთხვევაშიც, თუ სამკურნალოდ გჭირდება თანხა შენთვის ან ნებისმიერი ახლობლისთვის.
                <br /><br />
                შენი ქონება ჩვენთვის მხოლოდ დამატებითი საშუალებაა, რომ უფრო დიდი მიზნის მიღწევაში დაგეხმაროთ. გამოიყენე უკვე არსებული ქონება იმისთვის, რომ უფრო მეტი მოიპოვო და ისარგებლე უზრუნველყოფილი სამომხმარებლო სესხით.
            </p>
            <br /><br />
            <h2>პროდუქტის აღწერა და პირობები</h2>
            <div className={Styles.content}>
                <div className={Styles.table}>
                    <table>
                        <tbody>
                            <tr>
                                <td>სესხის ოდენობა</td>
                                <td>მინიმალური - 1,000 ლარი* 
                                    <br/> 
                                    მაქსიმალური - ინდივიდუალურად
                                </td>
                            </tr>
                            <tr>
                                <td>სესხის ვადა</td>
                                <td>
                                    მინიმალური - 3 თვე
                                    <br />
                                    მაქსიმალური - 120 თვე
                                </td>
                            </tr>
                            <tr>
                                <td>სესხის ვალუტა</td>
                                <td>ლარი, აშშ დოლარი, ევრო</td>
                            </tr>
                            <tr>
                                <td>ეფექტური საპროცენტო განაკვეთი</td>
                                <td>ლარი - 17.60%-დან 
                                    <br />
                                    აშშ დოლარი -  10.35%-დან
                                </td>
                            </tr>
                            <tr>
                                <td>სესხის დაფარვის პირობა</td>
                                <td>ყოველთვიური თანაბარი გადახდები</td>
                            </tr>
                            <tr>
                                <td>სესხის უზრუნველყოფა</td>
                                <td>უძრავი ან მოძრავი ქონება (ავტომანქანა)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className={Styles.buttons}>
                    <Button addon={<MdLaptop size={24} />}>შეავსე ონლაინ</Button>
                    <Button addon={<MdHeadsetMic size={24} />}>შეავსე ონლაინ</Button>
                    <Button addon={<MdLocationOn size={24} />}>შეავსე ონლაინ</Button>
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

