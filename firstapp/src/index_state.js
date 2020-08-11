import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isloggedIn: false,
    };
  }
  render() {
    return (
      <h3>
        You're currently logged
        {this.state.isloggedIn ? " in" : " out"}
      </h3>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
