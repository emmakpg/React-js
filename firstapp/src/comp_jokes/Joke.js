import React from "react";

function Joke(props) {
  if (props.joke.question === undefined) {
    return (
      <div className="joke-item">
        <p>{props.joke.answer}</p>
      </div>
    );
  } else {
    return (
      <div className="joke-item">
        <h3>
          <span style={{ color: "rgb(148, 42, 42)" }}>Question: </span>
          {props.joke.question}
        </h3>
        <p>
          <span style={{ color: "rgb(148, 42, 42)", fontStyle: "italic" }}>
            Answer:
          </span>{" "}
          {props.joke.answer}
        </p>
      </div>
    );
  }
}

export default Joke;
