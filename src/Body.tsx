import React, {MouseEvent, useState} from "react";
import './Body.css';
import {CarsType} from "./App";
import {Button} from "./Button";
import {Counter} from "./Counter";
import {Banknotes} from "./Banknotes";

type BodyPropsType = {
    infoBody: CarsType
}

type BanknoteType = {
    banknotes: string
    value: number
    number: string
}

export type MoneyArr = Array<BanknoteType>

export type ButtonType = {
    id: string
    title: string
}

const buttonArr: Array<ButtonType> = [{
    id: 'HelloID',
    title: 'Hello'
}]

const moneyArr: MoneyArr = [
    { banknotes: 'Dollars', value: 100, number: ' a1234567890' },
    { banknotes: 'Dollars', value: 50, number: ' z1234567890' },
    { banknotes: 'Rub', value: 100, number: ' w1234567890' },
    { banknotes: 'Dollars', value: 100, number: ' e1234567890' },
    { banknotes: 'Dollars', value: 50, number: ' c1234567890' },
    { banknotes: 'Rub', value: 100, number: ' r1234567890' },
    { banknotes: 'Dollars', value: 50, number: ' x1234567890' },
    { banknotes: 'Rub', value: 50, number: ' v1234567890' },
];


export const Body = (props: BodyPropsType) => {

    const doAnything = () => {
        console.log('Hello')
    }

    let [a, setA] = useState<any>('clickOnMe');

    const increment = () => {
        if (a === 'clickOnMe') {
            setA(0);
        } else {
            setA(++a)
        }
    }

    const setNull = () => {
        setA(0);
    }

    return (
        <div className='bodyWrapper'>
            <table>
                <tr>
                    <th>Num</th>
                    <th>Manufacture</th>
                    <th>Model</th>
                </tr>
                {props.infoBody.map((el, index) => {
                    return (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{el.manufacturer}</td>
                            <td>{el.model}</td>
                        </tr>
                    )
                })}
            </table>
            <Button data={buttonArr[0]} callBack={doAnything} />
            <Counter startNum={a} callbackIn={increment} callbackNull={setNull}/>
            <Banknotes data={moneyArr}/>
        </div>
    )
}