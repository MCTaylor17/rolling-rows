console.log("Hello World");
import "./styles/global.scss";
import React from "react";
import ReactDOM from "react-dom";
import MagicTable from "@/src/components/MagicTable";
import * as content from "./content";
import "./lock-exploits";

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

///////
//WIP//
///////

//   import React, {useEffect} from "react";
//   useEffect(InitializeStory,[]);

//const InitializeStory = () => {
//      const promptsContainer = document.querySelector("#prompts");
//      const button = document.querySelector("#next");
//
////    BUG: -->  let prompts = promptsContainer.children();
////    SYMPTOM: promptsContainer is null for some reason...
////    REPRODUCE: console.log({promptsContainer, button, prompts});
//    
////    let currentPage = 0;
////    const hideAllChildren = parent => {
////      parent.children.forEach(prompt => {
////        prompt.styles.display = "none";
////      });
////    };
////
////    const nextPage = prompts => {
////      hideAllChildren(prompts);
////      prompts[++currentPage].styles.display = "block";
////    };
//
//  }