import React from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends React.Component {

  render() {
    return (
      this.props.todos.map((todo) =>
          <TodoItem todo={todo} key={todo.id} markComplete={this.props.markComplete} delTodo={this.props.delTodo} />
        )
    );
  }
}

//a validations for properties a component should have
// we can set the type, are they required or not

Todos.propTypes = {
    todos: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}

export default Todos;
