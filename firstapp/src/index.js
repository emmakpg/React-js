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
      isVegetarian: false,
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
    const style = { margin: 10 };
    return (
      <div className="todo-list">
        <form>
          <input
            style={style}
            type="text"
            name="firstName"
            value={this.state.firstName}
            placeholder="First Name"
            onChange={this.handleChange}
          ></input>
          <br />
          <input
            style={style}
            type="text"
            name="lastName"
            value={this.state.lastName}
            placeholder="Last Name"
            onChange={this.handleChange}
          ></input>
          <br />
          <input
            style={style}
            type="number"
            name="age"
            value={this.state.age}
            placeholder="Enter Age"
            onChange={this.handleChange}
          ></input>
          <br />
          <label>
            <input
              style={style}
              type="radio"
              name="gender"
              value="Male"
              onChange={this.handleChange}
            ></input>
            Male
          </label>
          <label>
            <input
              style={style}
              type="radio"
              name="gender"
              value="Female"
              onChange={this.handleChange}
            ></input>
            Female
          </label>
          <br />
          <select
            style={style}
            value={this.state.country}
            name="country"
            onChange={this.handleChange}
          >
            <option value="America">America</option>
            <option value="Canada">Canada</option>
            <option value="Ghana">Ghana</option>
          </select>
          <br />
          <label>
            <input
              style={style}
              type="checkbox"
              name="isVegetarian"
              checked={this.state.isVegetarian}
              onChange={this.handleChange}
            ></input>
            Vegetarian
          </label>
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
        <p>
          <strong>Others: </strong>
          {this.state.isVegetarian ? "Vegetarian" : null}
        </p>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
