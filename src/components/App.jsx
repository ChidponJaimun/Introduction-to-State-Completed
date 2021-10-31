import React from "react";

var isDone = false;

function strike() {
  isDone = true;
}

function unStrike() {
  isDone = false;
}

// It's not change need hook to apply

function App() {
  const strikeThrough = { textDecoration: "line-through" };
  return (
    <div>
      <p style={isDone ? strikeThrough : null}>Buy milk</p>
      <button onClick={strike}>Change to strike through</button>
      <button onClick={unStrike}>Change back</button>
    </div>
  );
}

export default App;
