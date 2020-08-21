import React from "react";
import ReactDOM from "react-dom";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      country: "",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  }

  render() {
    return (
      <div className="todo-list">
        <form>
          <input
            type="text"
            name="firstName"
            value={this.state.firstName}
            placeholder="First Name"
            onChange={this.handleChange}
          ></input>
          <br />
          <input
            type="text"
            name="lastName"
            value={this.state.lastName}
            placeholder="Last Name"
            onChange={this.handleChange}
          ></input>
          <br />
          <input
            type="number"
            name="age"
            value={this.state.age}
            placeholder="Enter Age"
            onChange={this.handleChange}
          ></input>
          <br />
          <label>
            <input
              type="radio"
              name="gender"
              value="Male"
              onChange={this.handleChange}
            ></input>
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="Female"
              onChange={this.handleChange}
            ></input>
            Female
          </label>
          <br />
          <select
            value={this.state.country}
            name="country"
            onChange={this.handleChange}
          >
            <option value="America">America</option>
            <option value="Canada">Canada</option>
            <option value="Ghana">Ghana</option>
          </select>
        </form>
        <h3>Entered Information</h3>
        <p>
          <strong>First Name: </strong>
          {this.state.firstName}
        </p>
        <p>
          <strong>Last Name: </strong>
          {this.state.lastName}
        </p>
        <p>
          <strong>Age: </strong>
          {this.state.age}
        </p>
        <p>
          <strong>Gender: </strong>
          {this.state.gender}
        </p>
        <p>
          <strong>Destination: </strong>
          {this.state.country}
        </p>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
