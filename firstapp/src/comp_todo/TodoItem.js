import React from "react";

function doSomething() {
  console.log("Checked/Unchecked");
}

function TodoItem(props) {
  return (
    <div className="todoItem">
      <input
        type="checkbox"
        checked={props.item.completed}
        onChange={doSomething}
      />
      <p> {props.item.text}</p>
    </div>
  );
}

export default TodoItem;
