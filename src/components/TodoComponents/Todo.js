import React from 'react';

import './Todo.css';

const Todo = props => {
    return (
        <div 
        className={`task ${props.item.completed ? ' completedStrikeCss' : ''}`} 
        onClick={() => props.handleCompletedChange(props.item.id)}
        >
            <p>{props.item.task}</p>
        </div>
    )
}

export default Todo;


