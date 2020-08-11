import React from "react";
import ReactDOM from "react-dom";

function doSomething() {
  alert("It's Working!");
}

class App extends React.Component {
  render() {
    return (
      <div>
        <img
          onDoubleClick={doSomething}
          src="https://picsum.photos/200"
          alt=""
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
