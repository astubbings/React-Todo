// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    console.log(props)
    return (
        <div>
            {props.taskArray.map(item => (
                <Todo key={item.id} item={item} 
                handleCompletedChange={props.handleCompletedChange} 
                />
            ))}
            <button onClick={props.clearCompletedTasks}>
                    Clear Completed
            </button>

        </div>
    )
};

export default TodoList;