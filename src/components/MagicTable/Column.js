import React, { useState, useEffect, useRef } from "react";

const MagicCol = props => {
  const colStyles = {
    "--width": props.layout.width, 
    "--align": props.layout.align,
  };
  
  const isActive = props.isActive ? " active" : "";
  const classes = "magic-column" + isActive;
  
  return (
    <>
      <div onMouseEnter={props.onCellEnter} className={classes} style={colStyles} data-column={props.layout.label}>
        {props.columnData}
      </div>
    </>
  );
};

export default MagicCol;