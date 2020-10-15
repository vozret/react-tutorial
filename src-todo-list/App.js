import React from "react";

import todoData from "./todoData";

import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

import './style.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      todos: todoData,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    this.setState(
        (prevState) => {
            const newTodo = prevState.todos.map(
                (todo) => {
                    if(todo.id === id) {
                        todo.completed = !todo.completed
                    }

                    return todo
                }
            );
            
            return {
                todos: newTodo
            }
        }
    );
  }

  render() {
    const todoComponent = this.state.todos.map((todo) => {
      return <MainContent
        key={todo.id}
        todo={todo}
        onChange={this.handleChange}
      />;
    });

    return (
      <div>
        <Header />
        {todoComponent}
        <Footer />
      </div>
    );
  }
}

export default App;
