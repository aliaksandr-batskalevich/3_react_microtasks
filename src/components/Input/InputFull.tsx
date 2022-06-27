import React, {useState} from "react";
import {toDoListArrType} from "../../Body";
import {Input} from "./Input";
import {Button} from "./Button";

type InputPropsType = {
    data: toDoListArrType
}

export const InputFull = (props: InputPropsType) => {

    let [toDoList, setToDoList] = useState<toDoListArrType>(props.data)

    let [inputData, setInputData] = useState<string>('')

    const getData = (data: string) => {
        setInputData(data);
    }
    const callBackSetData = () => {
        setToDoList([{id: 'jhcl', value: inputData}, ...toDoList])
        setInputData('')
    }


    return (
        <div className={'inputFullWrapper'}>
            <h2>ToDoList</h2>
            <Input inputData={inputData} callBack={getData} callBackSetData={callBackSetData}/>
            <Button title={'+'} callBackSetData={callBackSetData}/>
            {toDoList.map(el => {
                return (
                    <li key={el.id}>{el.value}</li>
                )
            })}
        </div>
    )
}