import React, { Component } from 'react';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import Header from './components/layout/Header';

import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out the trash',
        completed: false

      },
      {
        id: 2,
        title: 'Finish Project',
        completed: false

      },
      {
        id: 3,
        title: 'Phone calls',
        completed: false

      },

    ]
  }
  //Toggle complete
  markComplete = (id) =>{
    //this is saying: set the state of todos to this states todos
    //as an iterable : where each is named todo and apply this function
    //check the id and if it is the same as the id passed in then make it the opposite
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    }) });
  }

  // Delete Todo
  // 
  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id
       !== id)] });
  }
  
  

  render() {
    return (

      <div className="App">
      <div className="container">

        <Header />

        <AddTodo addTodo={this.addTodo}/>

        <Todos todos={this.state.todos} markComplete={this.markComplete}
        delTodo={this.delTodo}/>

      </div>

      </div>
    );
  }
}

export default App;
