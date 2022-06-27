import React, {ChangeEvent, useState, KeyboardEvent} from "react";

type InputPropsType = {
    inputData: string
    callBack: (data: string) => void
    callBackSetData: () => void
}

export const Input = (props: InputPropsType) => {

    const onChangeInputHandler = (event:ChangeEvent<HTMLInputElement>) => {
        props.callBack(event.currentTarget.value)
    }
    const onKeyPressInputHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            props.callBackSetData();
        }
    }

    return (
        <input placeholder={'enter task'} value={props.inputData} onChange={onChangeInputHandler} onKeyPress={onKeyPressInputHandler}></input>
    )
}