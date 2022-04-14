import React, {useState} from "react";
import {Tasks} from "./02/components/Tasks";
import {Input} from "./02/components/Input";
import {Button} from "./02/components/Button";

export type TaskType = {
    id: number
    title: string
}

let counter = 4;

const App = () => {
    const [tasksArr, setTasksArr] = useState<Array<TaskType>>([
        {id: 1, title: 'Task1'},
        {id: 2, title: 'Task2'},
        {id: 3, title: 'Task3'},
    ])

    const counterID = () => {
        return counter++;
    }

    const [word, setWord] = useState<string>('');

    const addWord = (word: string) => {
        setWord(word);
    }

    const addTask = () => {
        setTasksArr([{id: counterID(), title: word}, ...tasksArr]);
        setWord('');
    }

    const deleteTask = (id: number) => {
        setTasksArr(tasksArr.filter(item => item.id !== id))
    }

    return (
        <>
            <div>
                <Input value={word} callback={addWord}/>
                <Button title={'add'} callback={addTask}/>
            </div>
            <Tasks taskArr={tasksArr} callback={deleteTask}/>
        </>
    )
}

export default App