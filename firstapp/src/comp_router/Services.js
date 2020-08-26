import React, { useState, useEffect } from "react";

class Services extends React.Component {
  /*   const fetchMeal = async () => {
    const data = await fetch("https://sv443.net/jokeapi/v2/joke/Any");
    const items = await data.json();
    console.log(items); } */

  constructor() {
    super();

    this.state = { item: "" };
  }

  componentDidMount() {
    fetch("https://sv443.net/jokeapi/v2/joke/Any")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }

  render() {
    return (
      <div>
        <h3>Services Page</h3>
      </div>
    );
  }
}

export default Services;
