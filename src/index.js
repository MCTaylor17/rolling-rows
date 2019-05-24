console.log("Hello World");
import "./styles";
import React from "react";
import ReactDOM from "react-dom";
import Story from "@/src/components/Story";

import * as content from "./content";
import "./lock-exploits";

const fragments = document.querySelectorAll('.fragment');

fragments.forEach(fragment => {
  const replacement = document.createElement('div');
  const name = fragment.dataset.name;
  
  replacement.innerHTML = content[name];
  fragment.parentNode.replaceChild(replacement, fragment);
});

const cookies = document.getElementById("cookies");
const cookieHandler = event => {
  window.setIsCookiesAccepted(true);
  cookies.classList.add("accepted");
}

cookies.addEventListener("click",cookieHandler);

const rootElement = document.getElementById("root");
ReactDOM.render(<Story init={(setIsCookiesAccepted) => {window.setIsCookiesAccepted = setIsCookiesAccepted}}/>, rootElement);
