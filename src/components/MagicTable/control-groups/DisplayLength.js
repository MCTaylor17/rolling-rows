import React from "react";

const DisplayLength = props => {
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
        title="Adjust Visible Rows">
        <i 
          className={icons["displayLength"]}/>
        <label 
          className="hidden" 
          for="displayLength">Adjust Visible Rows</label>
        <input 
          className="reveal" 
          id="displayLength" 
          onChange={props.onDisplayLength} 
          value={props.displayLength} 
          type="range" 
          min="1" 
          max="40"/>
      </div>
    </>
  );
};

export default DisplayLength;