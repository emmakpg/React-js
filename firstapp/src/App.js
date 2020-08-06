import React from "react";

function App() {
  const myName = "Emmanuel Kpogo";

  const date = new Date();
  const style = { color: "red", backgroundColor: "#fcf0fe", fontSize: "30px" };

  return (
    <div>
      <h1>I am {myName}</h1>
      <p style={style}>And the time is {date.getHours() % 12} o'clock</p>
    </div>
  );
}

export default App;
