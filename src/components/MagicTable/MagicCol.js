import React, { useState, useEffect, useRef } from "react";

const MagicCol = props => {
  const colStyles = {
    "--width": props.layout.width, 
    "--align": props.layout.align
  };
  
  return (
    <>
      <div className="magic-column" style={colStyles}>
        {props.columnData}
      </div>
    </>
  );
};

export default MagicCol;