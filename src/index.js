console.log("Hello World");

import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  return (
    <div className="App">
      <p>Hello World</p>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);