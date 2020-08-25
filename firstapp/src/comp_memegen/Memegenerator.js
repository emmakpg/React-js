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
    //this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    //fetchAPI
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((res) => {
        const { memes } = res.data;
        //console.log(memes[0]);
        this.setState({ allMemes: memes });
      });
  }

  handleChange(event) {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const num = Math.floor(Math.random() * this.state.allMemes.length);
    const Img = this.state.allMemes[num].url;
    this.setState({ randImage: Img });
  };

  render() {
    return (
      <div>
        <form className="meme-form" onSubmit={this.handleSubmit}>
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

        <div className="meme">
          <img src={this.state.randImage} alt="" />
          <h2 className="top">{this.state.topText}</h2>
          <h2 className="bottom">{this.state.bottomText}</h2>
        </div>
      </div>
    );
  }
}

export default Memegenerator;
