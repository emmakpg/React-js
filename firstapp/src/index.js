import React from "react";
import ReactDOM from "react-dom";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      count: 0,
    };

    this.increaseNumber = this.increaseNumber.bind(this);
    this.resetCount = this.resetCount.bind(this);
  }

  increaseNumber() {
    // console.log("you clicked me!");

    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      };
    });
  }

  resetCount() {
    this.setState({ count: 0 });
  }

  render() {
    return (
      <div className="todo-list">
        <h1 style={{ fontSize: "45px" }}>{this.state.count}</h1>
        <button onClick={this.increaseNumber}>Increase</button>
        <button onClick={this.resetCount}>Reset</button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
