import React from "react";

class Memegenerator extends React.Component {
  constructor() {
    super();

    this.state = {
      topText: "",
      bottomText: "",
      randImage: "http://i.imgflip.com/1bij.jpg",
      allMemes: [],
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    //fetchAPI
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((res) => {
        const { memes } = res.data;
        console.log(memes[0]);
        this.setState({ allMemes: memes });
      });
  }

  handleChange(event) {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  }

  render() {
    return (
      <div>
        <form className="meme-form">
          <input
            type="text"
            name="topText"
            value={this.state.topText}
            placeholder="Enter top Text"
            onChange={this.handleChange}
          ></input>

          <input
            type="text"
            name="bottomText"
            value={this.state.bottomText}
            placeholder="Enter bottom Text"
            onChange={this.handleChange}
          ></input>

          <button>Generate</button>
        </form>

        <h3>
          {this.state.topText} {this.state.bottomText}
        </h3>
      </div>
    );
  }
}

export default Memegenerator;
