console.log("Hello World");
import "./styles/global.scss";

import React from "react";
import ReactDOM from "react-dom";
import MagicTable from "@/src/components/MagicTable";



const App = () => {
  return (
    <div className="App">
      <MagicTable />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);