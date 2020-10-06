import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Todos from "./components/Todos";
import Header from "./components/layout/Header";
import AddTodo from "./components/AddTodo";
import About from "./components/pages/About";
// import { v4 as uuidv4 } from "uuid";
import axios from 'axios';

import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      todos: [],
    };

    this.markComplete = this.markComplete.bind(this);
    this.delTodo = this.delTodo.bind(this);
  }


  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => this.setState({
        todos: res.data
      }));
  }
  /*
    without binding -> arrow function

    markComplete = (e) => {
        console.log(this.props);
    }    
    */

  // toggle Complete
  markComplete(id) {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  }

  //Delete Todo
  delTodo(id) {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => 
        this.setState({
          todos: [...this.state.todos.filter((todo) => todo.id !== id)],
        })
        );
  }

  // Add todo
  addTodo = (title) => {
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed: false
    }).then(res =>
      this.setState({
      todos: [...this.state.todos, res.data],
    }));
  };

  render() {
    //console.log(this.state.todos);
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route
              exact path="/"
              render={(props) => (
                <React.Fragment>
                  <AddTodo addTodo={this.addTodo} />
                  <Todos
                    todos={this.state.todos}
                    markComplete={this.markComplete}
                    delTodo={this.delTodo}
                  />
                </React.Fragment>
              )}
            />
            <Route
            path="/about"
            component={About}
            />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
