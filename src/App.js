import React from 'react';

// CodeSandBox Example
// https://codesandbox.io/s/class-components-starter-my-changes-5e6rr
// Class Components - Starter - My Changes

import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';



const taskArray = [
  {
    task: 'Dust Computer',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Trust Lambda Process',
    id: 1528817099234,
    completed: false
  },
  {
    task: 'Embrace Imposter Syndrome',
    id: 1528817084358,
    completed: true
  },
  {
    task: 'Buy Coffee Cup',
    id: 1528817094687,
    completed: false
  }
];


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  // making a constructor with state
  // we initialize state with the super
  constructor() {
    super();
    this.state = {
      taskArray: taskArray
    };
  };

  handleCompletedChange = id => {
    const change = this.state.taskArray.map(task => {
      if (id === task.id) {
        task.completed = !task.completed;
      }
      return task;

    });
    this.setState(change);
  };

  

  addTask = newTaskText => {
    const newTask = {
      task: newTaskText,
      id: Date.now(),
      completed: false
    };
    this.setState({
      taskArray: [...this.state.taskArray, newTask]
    });
  };




  render() {
    console.log("rendering..."); // I like this console.log from example
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <h1>To Do List</h1>
        <TodoForm addTask={this.addTask}  />
        <TodoList
          taskArray={this.state.taskArray}
          handleCompletedChange={this.handleCompletedChange}
        />
      </div>
    );
  }
}

export default App;
