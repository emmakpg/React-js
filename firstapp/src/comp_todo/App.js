import React from "react";
import TodoItem from "./TodoItem";
import todosData from "./todoData";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      todos: todosData,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    console.log("Working", id);

    this.setState({});
  }

  render() {
    const TodoComponent = this.state.todos.map((item) => (
      <TodoItem key={item.id} item={item} handleChange={this.handleChange} />
    ));

    return <div className="todo-list">{TodoComponent}</div>;
  }
}

export default App;
