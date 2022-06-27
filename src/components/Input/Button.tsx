import React, {MouseEvent} from "react";

type ButtonPropsType = {
    title: string
    callBackSetData: () => void
}

export const Button = (props: ButtonPropsType) => {

    const onClickButtonHandler = (event: MouseEvent<HTMLButtonElement>) => {
        props.callBackSetData();
    }

    return (
        <button onClick={onClickButtonHandler}>{props.title}</button>
    )
}