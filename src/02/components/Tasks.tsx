import React from "react";
import {TaskType} from "../../App";
import {Button} from "./Button";

type TasksPropsType = {
    taskArr: Array<TaskType>
    callback: (id: number) => void
}

export const Tasks = (props: TasksPropsType) => {

    const deleteTask = (id: number) => {
        props.callback(id);
    }

    return (
        <ol>
            {props.taskArr.map (item => {
                return (
                    <div>
                        <span key={item.id}>{item.title}</span>
                        <Button title={'X'} callback={() => deleteTask(item.id)}/>
                    </div>

                )
            })}
        </ol>
    )
}