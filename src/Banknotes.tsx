import React, {useState} from "react";
import {MoneyArr} from "./Body";
import {Button} from "./Button";

type BanknotesPropsType = {
    data: MoneyArr
}

type FilterType = 'all' | 'rub' | 'doll'
type BanknotesButtonType = {
    id: string
    title: string
    filter: FilterType
}
type BanknotesButtonArrType = Array<BanknotesButtonType>

const banknotesButtonArr: BanknotesButtonArrType = [
    {id: "1", title: 'ALL', filter: 'all'},
    {id: "2", title: 'RUB', filter: 'rub'},
    {id: "3", title: 'DOLL', filter: 'doll'}
]

export const Banknotes = (props: BanknotesPropsType) => {

    let [moneyArr, setMoneyArr] = useState<MoneyArr>(props.data)

    let [filter, setFilter] = useState<FilterType>("all")

    const setFilters = (filterBack: FilterType) => {
        setFilter(filterBack);
    }

    let currentMoney = moneyArr;
    if (filter === "rub") {
        currentMoney = moneyArr.filter( el => el.banknotes === 'Rub')
    } else if (filter === "doll") {
        currentMoney = moneyArr.filter( el => el.banknotes === 'Dollars')
    } else if (filter === "all") {
        currentMoney = moneyArr;
    }

    const deleteBanknote = (delNum: string) => {
        setMoneyArr(moneyArr.filter(el => el.number !== delNum))
    }
    const double = (doubleNum: string) => {
        setMoneyArr(moneyArr.map(el => {
            if (el.number === doubleNum) {
                return ({banknotes: el.banknotes, value: el.value *= 2, number: el.number})
            } else {return el}
        }))
    }

    return (
        <div className='banknotesWrapper'>
            <table>
                <tr>
                    <th>Num</th>
                    <th>Banknotes</th>
                    <th>Value</th>
                    <th>Number</th>
                    <th>Del</th>
                    <th>x2</th>
                </tr>
                {currentMoney.map( (el, index) => {
                    return (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{el.banknotes}</td>
                            <td>{el.value}</td>
                            <td>{el.number}</td>
                            <td><Button data={{id: 'X', title: 'X'}} callBack={() => deleteBanknote(el.number)} /></td>
                            <td><Button data={{id: 'x2', title: 'x2'}} callBack={() => double(el.number)} /></td>
                        </tr>
                    )
                })}
            </table>
            {banknotesButtonArr.map(el => {
                return (
                    <Button key={el.id} data={{id: el.id, title: el.title}} callBack={() => setFilters(el.filter)} />
                )
            })}
        </div>
    )
}