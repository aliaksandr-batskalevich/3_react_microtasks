import React, {ChangeEvent} from "react";

type InputPropsType = {
    value: string
    callback: (word: string) => void
}

export const Input = (props: InputPropsType) => {
    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.callback(event.currentTarget.value);
    }

    return (
        <input type="text" value={props.value} onChange={onChangeInputHandler}/>
    )
}