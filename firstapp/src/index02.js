import React from "react";
import ReactDOM from "react-dom";

function MyApp() {
  return (
    <ul>
      <li>React</li>
      <li>Vue</li>
      <li>Angular</li>
    </ul>
  );
}

ReactDOM.render(<MyApp />, document.getElementById("root"));
