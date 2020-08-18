import React from "react";

function TodoItem(props) {
  /*  let itemClass = "todoItem";
  if (props.item.completed) {
    itemClass += " completed";
  } */

  const completedStyle = {
    color: "blue",
    textDecoration: "line-through",
  };

  return (
    <div className="todoItem">
      <input
        type="checkbox"
        checked={props.item.completed}
        onChange={() => props.handleChange(props.item.id)}
      />
      <p style={props.item.completed ? completedStyle : null}>
        {props.item.text}
      </p>
    </div>
  );
}

export default TodoItem;
