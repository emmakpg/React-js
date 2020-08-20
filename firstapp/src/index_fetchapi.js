import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      isLoading: false,
      joke: {},
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    fetch("https://sv443.net/jokeapi/v2/joke/Any")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ joke: data, isLoading: false });
      });
  }

  render() {
    let joke = this.state.joke;

    if (this.state.isLoading) {
      return <h3>Loading...</h3>;
    } else {
      return (
        <div>
          <h3>{joke.setup}</h3>
          <p>{joke.delivery}</p>
        </div>
      );
    }
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
