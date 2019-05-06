import React from "react";
import MagicCol from "./MagicCol";

const MagicRow = props => {

  const getStyleVariables = rowID => {
    return {
      "--id": rowID,
      "--primaryColor": props.palette[rowID % props.palette.length]
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