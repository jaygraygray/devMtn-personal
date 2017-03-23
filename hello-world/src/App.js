import React, { Component } from 'react';
import './App.css';
import AddToDo from './components/AddToDo';

class App extends Component {
  constructor() {
    super();
    this.state = {
    todos: []
  };
  this.createTodo = this.createTodo.bind(this)
  }


createTodo( todoText ) {
    this.setState( { todos: [  {text:todoText, completed:false}, ...this.state.todos ] })
   // this.setState( { todos: [ todoText ].concat( this.state.todos ) } );
  }


markComplete( index ) {
  this.setState( {
    todos: [ 
         ...this.states.todos.slice(0, index)
        , Object.assign( {}, this.state.todos[ index ], { complete : true })
        , ...this.state.todos.slice( index + 1, this.state.todos.length)
    ]
  })
}



  render() {
    const todo = this.state.todos
      .filter( todos => todos)
      .map( (todos, index) => console.log(todos) || (
        <li key={index}>
        {todos.text}
        <input
              checked={ todos.complete }
              type="checkbox"
              value={todos.complete }/>

        </li>))
    return ( 
      <div className="App">
        <AddToDo createToDo={ this.createTodo } />
        <ul>
          {todo}
        </ul>
      </div>
    );
  }
}

export default App;




// Axios - HTTP
// ReactRouter 
// Redux --> LEARN AFTER 
// UUID
// ClassNames