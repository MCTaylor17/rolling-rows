import React from "react";

const TransitionTime = props => {
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
        title="Adjust Animation Speed">
        <i 
          className={icons["transitionTime"]}/>
        <label 
          className="hidden" 
          for="transitionTime">Adjust Animation Speed</label>
        <input 
          className="reveal" 
          id="transitionTime" 
          onChange={props.onTransitionTime} 
          value={props.transitionTime} 
          type="range" 
          min="0" 
          max="3" 
          step="0.1"/>
      </div>
    </>
  );
};

export default TransitionTime;