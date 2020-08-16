import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      isLoading: true,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 1500);
  }
  render() {
    return <Conditional isLoading={this.state.isLoading} />;
  }
}

function Conditional(props) {
  return (
    <div>
      {props.isLoading ? <h3>Loading</h3> : <h3>Finished Loading Content</h3>}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
