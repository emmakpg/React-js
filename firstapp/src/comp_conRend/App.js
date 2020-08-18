import React from "react";
import Button from "./Button";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      isLoggedIn: false,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => {
      return prevState.isLoggedIn
        ? (prevState.isLoggedIn = false)
        : (prevState.isLoggedIn = true);
    });
  }
  render() {
    return (
      <div>
        <h3>Logged {this.state.isLoggedIn ? "In" : "Out"}</h3>
        <Button
          handleClick={this.handleClick}
          inout={this.state.isLoggedIn ? "Logout" : "Login"}
        />
      </div>
    );
  }
}

export default App;
