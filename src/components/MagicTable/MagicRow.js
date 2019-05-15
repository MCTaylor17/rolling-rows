import React from "react";
import MagicCol from "./MagicCol";

const MagicRow = props => {
  const rowColors = props.themes[props.themeChoice].colors;
  const getStyleVariables = rowID => {
    return {
      "--id": rowID,
      "--primaryColor": rowColors[rowID % rowColors.length]
    };
  }
  
    
  return (
    <>
      <div className="magic-row" style={getStyleVariables(props.rowID)}>
        {props.columns.map((column,index) => (
          <MagicCol key={index} {...column} {...props}/>
        ))}
      </div>
    </>
  );
};

export default MagicRow;