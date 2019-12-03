import React from 'react';

import './Todo.css';

const Todo = props => {
    return (
        <div className={`${props.item.completed ? 'completedStrikeCss' : ''}`} onClick>
            <p>{props.item.task}</p>
        </div>
    )
}

export default Todo;