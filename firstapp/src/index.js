import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      firstName: "",
      lastName: "",
      about: "Great",
      favColor: "",
      isProgrammer: true,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value, type, checked } = event.target;
    type === "checkbox"
      ? this.setState({ [name]: checked })
      : this.setState({ [name]: value });
  }

  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            name="firstName"
            value={this.state.firstName}
            placeholder="First Name"
            onChange={this.handleChange}
          />
          <br />
          <input
            type="text"
            name="lastName"
            value={this.state.lastName}
            placeholder="Last Name"
            onChange={this.handleChange}
          />
          <br />
          <textarea value={this.state.about} />

          <h3>
            {this.state.firstName} {this.state.lastName}
          </h3>
          <label>Favorite Color</label>

          <br />
          <label>
            <input
              type="checkbox"
              name="isProgrammer"
              checked={this.state.isProgrammer}
              onChange={this.handleChange}
            ></input>
            Is a Programmer?
          </label>
          <br />
          <select
            value={this.state.favColor}
            name="favColor"
            onChange={this.handleChange}
          >
            <option value="blue">Blue</option>
            <option value="red">Red</option>
            <option value="green">Green</option>
          </select>
          <br />
          <button>Submit</button>
        </form>
        <p>About Me: {this.state.about}</p>
        <p>Your favorite color is {this.state.favColor}</p>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
