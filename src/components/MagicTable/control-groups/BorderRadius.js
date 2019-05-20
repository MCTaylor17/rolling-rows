import React from "react";

const BorderRadius = props => {
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
        title="Adjust Cell Roundness">
       <i 
         className={icons["borderRadius"]}/>
         <label 
           className="hidden" 
           for="borderRadius">Adjust Cell Roundness</label>
           <input 
             className="reveal" 
             id="borderRadius" 
             onChange={props.onBorderRadius} 
             value={props.borderRadius} 
             type="range" 
             min="0" 
             max="45"/>
      </div>
    </>
  );
};

export default BorderRadius;