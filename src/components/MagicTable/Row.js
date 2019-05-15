import React from "react";
import Column from "./Column";

const Row = props => {
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
          <Column key={index} {...column} {...props}/>
        ))}
      </div>
    </>
  );
};

export default Row;