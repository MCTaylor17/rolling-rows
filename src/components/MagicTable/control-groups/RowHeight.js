import React from "react";

const RowHeight = props => {
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
        title="Adjust Row Height">
        <i 
          className={icons["rowHeight"]}/>
        <label 
          className="hidden" 
          for="rowHeight">Adjust Row Height</label>
        <input 
          className="reveal" 
          id="rowHeight" 
          onChange={props.onRowHeight} 
          value={props.rowHeight} 
          type="range" 
          min="25" 
          max="50"/>
       </div>
    </>
  );
};

export default RowHeight;