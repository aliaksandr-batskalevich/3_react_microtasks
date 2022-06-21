import React, {MouseEvent} from "react";
import {Button} from "./Button";
import {ButtonType} from "./Body";

type CounterPropsType = {
    startNum: number
    callbackIn: () => void
    callbackNull: () => void
}

const CounterButtonArr: Array<ButtonType> = [{
    id: 'setNull',
    title: 'setNull'
}];

export const Counter = (props: CounterPropsType) => {
    const onclickHandler = (event: MouseEvent<HTMLHeadingElement>) => {
        props.callbackIn();
    }

    return (
        <div>
            <h1 onClick={onclickHandler}>{props.startNum}</h1>
            <Button data={CounterButtonArr[0]} callBack={props.callbackNull} />
        </div>
    )
}