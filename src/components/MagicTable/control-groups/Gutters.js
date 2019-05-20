import React from "react";

const Gutters = props => {
  const icons = {
    rowHeight: "icon fas fa-ruler-vertical",
    borderRadius: "icon fas fa-external-link-square-alt",
    gutters: "icon fas fa-grip-horizontal",
    displayLength: "icon fas fa-grip-lines",
    transitionTime: "icon fas fa-stopwatch",
    themeChoice: "icon fas fa-paint-brush",
  }
  
  return (
    <>
      <div 
        className="control-group" 
        title="Adjust Cell Spacing">
        <i 
          className={icons["gutters"]}/>
        <label 
          className="hidden" 
          for="gutters">Adjust Cell Spacing</label>
        <input 
          className="reveal" 
          id="gutters" 
          onChange={props.onGutters} 
          value={props.gutters} 
          type="range" 
          min="0" 
          max="30"/>
      </div>
    </>
  );
};

export default Gutters;