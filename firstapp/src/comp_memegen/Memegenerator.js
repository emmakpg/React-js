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
  }

  componentDidMount() {
    //fetchAPI
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((res) => {
        //console.log(res.data.memes);

        this.setState({ allMemes: res.data.memes });
      });
  }

  render() {
    return (
      <div>
        <h3>MemeGenererator</h3>
        <img
          style={{ width: 200, height: 150 }}
          src={this.state.randImage}
          alt=""
        ></img>
        <p>{this.state.allMemes}</p>
      </div>
    );
  }
}

export default Memegenerator;
