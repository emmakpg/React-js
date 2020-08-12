import React from "react";
import ReactDOM from "react-dom";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      count: 0,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // console.log("you clicked me!");

    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      };
    });
  }

  render() {
    return (
      <div className="todo-list">
        <h1 style={{ fontSize: "45px" }}>{this.state.count}</h1>
        <button onClick={this.handleClick}>Click Me</button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
