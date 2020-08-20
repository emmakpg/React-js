import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      firstName: "",
    };
  }
  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            placeholder="First Name"
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
