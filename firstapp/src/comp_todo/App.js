import React from "react";
import TodoItem from "./TodoItem";
import todosData from "./todoData";

const TodoComponent = todosData.map((item) => (
  <TodoItem key={item.id} item={item} />
));

function App() {
  return <div className="todo-list">{TodoComponent}</div>;
}

export default App;
