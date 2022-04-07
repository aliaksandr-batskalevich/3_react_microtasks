import React from "react";

type ButtonPropsType = {
    config: ArrayType
    greeting?: () => any
}

type ArrayType = {
    id: number
    title: string
    greetingName: string
}

export const Button = (props: ButtonPropsType) => {

    return (
        <button onClick={props.greeting}>{props.config.title}</button>
    )
}