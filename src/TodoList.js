import React, { Component } from 'react';
const APIURL = 'https://todo-api-mernstack.herokuapp.com/api/todos';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    }
  }

  componentWillMount(){
    this.loadTodos();
  }

  loadTodos() {
    fetch(APIURL)
    .then(response => {
      if(!response.ok) {
        if(response.status >= 400 && response.status < 500) {
          return response.json().then(data => {
            let err = {errorMessage: data.message};
            throw err;
          })
        } else {
          let err = {errorMessage: 'Please try again later, server is not responding.'};
          throw err;
        }
      }
      return response.json();
    })
    .then(todos => this.setState({todos}));
  }

  render() {
    return (
      <h1>Todo List</h1>
    );
  }
}

export default TodoList;
