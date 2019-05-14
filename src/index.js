console.log("Hello World");
import "./styles/global.scss";
import React from "react";
import ReactDOM from "react-dom";
import MagicTable from "@/src/components/MagicTable";
import * as content from "./content";

const fragments = document.querySelectorAll('.fragment');

fragments.forEach(fragment => {
  const replacement = document.createElement('div');
  const name = fragment.dataset.name;
  
  replacement.innerHTML = content[name];
  fragment.parentNode.replaceChild(replacement, fragment);
});

const App = () => {
  return (
    <div className="App">
      <MagicTable/>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
