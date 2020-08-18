import React from "react";

function Button(props) {
  return <button onClick={props.handleClick}>{props.inout}</button>;
}

export default Button;
