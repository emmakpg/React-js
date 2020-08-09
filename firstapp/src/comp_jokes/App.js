import React from "react";
import Joke from "./Joke";

function App() {
  return (
    <div className="container">
      <Joke
        joke={{
          question: "Why do we tell actors to “break a leg?",
          answer: "Because every play has a cast.",
        }}
      />
      <Joke
        joke={{
          question: "Heard about the new restaurant called Karma?",
          answer: "There’s no menu: You get what you deserve.",
        }}
      />
      <Joke
        joke={{
          question: "What’s the best thing about Switzerland?",
          answer: "I don’t know, but the flag is a big plus.",
        }}
      />
      <Joke
        joke={{
          answer: "I invented a new word: Plagiarism!",
        }}
      />
      <Joke
        joke={{
          answer:
            "Helvetica and Times New Roman walk into a bar. “Get out of here!” shouts the bartender. “We don’t serve your type.”",
        }}
      />
    </div>
  );
}

export default App;
