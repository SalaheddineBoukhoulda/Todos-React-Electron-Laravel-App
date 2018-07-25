import React, { Component } from 'react';
import AddTodo from './components/addtodo';
import TodoList from './components/todolist';
import axios from 'axios';
import './App.css';
import { debug } from 'util';

const API_URL = 'http://127.0.0.1:8000/api/todos';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      todos : []
    };

    this.deleteTodo = this.deleteTodo.bind(this);
    this.completeTodo = this.completeTodo.bind(this);
    this.createTodo = this.createTodo.bind(this);
  }

  completeTodo(todoId){
    
    axios.post(`${API_URL}/complete`,{id:todoId})
        .then(() => {
          const todos = this.state.todos.map((todo) => {
              if(todo.id === todoId){
                  todo.completed = !todo.completed;
              }
              return todo;
          });
            this.setState({todos});
        })
  }

  createTodo(name){
    axios.post(API_URL,{name})
      .then((response) => {
        const todos = this.state.todos.concat([response.data.todo]);
        this.setState({todos});
      })
  }


  deleteTodo(todoId){
    axios.post(`${API_URL}/delete`,{id:todoId})
        .then(() => {
          const todos = this.state.todos.filter((todo) => todo.id !== todoId);
          this.setState({todos});
        })
  }

  componentDidMount(){
    axios.get(API_URL)
      .then((response) => {
        this.setState({todos:response.data.todos});
      });
  }

  render() {
    return (
      <div className="App">
        <AddTodo 
          createTodo = {this.createTodo}
        />
        <TodoList 
          todos={this.state.todos}
          completeTodo = {this.completeTodo}
          deleteTodo = {this.deleteTodo}
        />
      </div>
    );
  }
}

export default App;
