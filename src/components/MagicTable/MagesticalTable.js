import React from "react";
import MagicRow from "./MagicRow";
import MagicControls from "./MagicControls";

import "./styles/index.scss";

const MagesticalTable = props => {
  const tableStyles = {
    "--rowHeight": props.rowHeight + "px",
    "--numberOfRows": props.numberOfRows
  }
  
  return (
    <>
      <div className="magic-table" style={tableStyles}>
        
        <MagicControls {...props.handlers} />
        
        <div className="magic-thead">
         <MagicRow {...props} {...props.headerRow}/>
        </div>
        
        <div className="magic-tbody" ref={props.tableRef}>
          
          {props.magicRows.map((row, index) => (
            <MagicRow key={index} {...row} {...props} />
          ))}
          
        </div>

      </div>
    </>
  );
};

export default MagesticalTable;


  
