import React from "react";
import {ButtonType} from "./Body";

type ButtonPropsType = {
    data: ButtonType
    callBack: () => void
}

export const Button = (props: ButtonPropsType) => {

    const onclickHandler = (text: string) => {
        props.callBack();
    }

    return (
        <button onClick={() => onclickHandler(props.data.id)}>{props.data.title}</button>
    )
}