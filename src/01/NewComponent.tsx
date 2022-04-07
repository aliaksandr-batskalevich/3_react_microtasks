import React from "react";
import {FilterType} from "../App";

type NewComponentPropsType = {
    arr: Array<ArrayType>
    callback: (filterName: FilterType) => void
}

type ArrayType = {
    moneyName: string
    value: number
    number: string
}

export function NewComponent(props: NewComponentPropsType) {
    return (
        <>
            <h1>Filter of money</h1>
            <ul>
                {props.arr.map((item, index) => {
                    return (
                        <li key={index}>{item.moneyName} {item.value} {item.number}</li>
                    )
                })}
            </ul>
            <button onClick={() => props.callback('ALL')}>ALL</button>
            <button onClick={() => props.callback('Dollars')}>Dollars</button>
            <button onClick={() => props.callback('RUB')}>RUB</button>
        </>
    )
}