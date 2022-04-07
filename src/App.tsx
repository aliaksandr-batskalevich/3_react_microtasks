import React, {useState} from 'react';
import './App.css';
import {NewComponent} from "./01/NewComponent";

export type FilterType = 'ALL' | 'Dollars' | 'RUB'

function App() {

    const money = [
        {moneyName: 'Dollars', value: 100, number: ' a1234567890'},
        {moneyName: 'Dollars', value: 50, number: ' z1234567890'},
        {moneyName: 'RUB', value: 100, number: ' w1234567890'},
        {moneyName: 'Dollars', value: 100, number: ' e1234567890'},
        {moneyName: 'Dollars', value: 50, number: ' c1234567890'},
        {moneyName: 'RUB', value: 100, number: ' r1234567890'},
        {moneyName: 'Dollars', value: 50, number: ' x1234567890'},
        {moneyName: 'RUB', value: 50, number: ' v1234567890'}
    ]

    let [filter, setFilter] = useState<FilterType>('ALL');

    const setFilterHandler = (filterName:FilterType) => {
        setFilter(filter = filterName)
    }

    let moneyAfterFilter = money;

    if (filter === 'Dollars') {
        moneyAfterFilter = money.filter((item) => item.moneyName === 'Dollars')
    } else if (filter === 'RUB') {
        moneyAfterFilter = money.filter((item) => item.moneyName === 'RUB')
    } else if (filter === 'ALL') {
        moneyAfterFilter = money;
    }

    return <NewComponent arr={moneyAfterFilter} callback={(filterName) => setFilterHandler(filterName)}/>
}

export default App;