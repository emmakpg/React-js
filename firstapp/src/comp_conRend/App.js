import React from "react";
import Button from "./Button";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      isLoggedIn: true,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    alert("Working");
  }
  render() {
    return (
      <div>
        <h3>Logged {this.state.isLoggedIn && "In"}</h3>
        <Button handleClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
