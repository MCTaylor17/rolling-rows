import React from "react";
import MagicRow from "./MagicRow";
import MagicControls from "./MagicControls";
import "./styles/index.scss";


const MagesticalTable = props => {
  const tableStyles = {
    "--transitionTime": props.transitionTime + "s",
    "--borderRadius":   props.borderRadius + "px",
    "--rowHeight":      props.rowHeight + "px",
    "--numberOfRows":   props.numberOfRows,
    "--columnWidths":   props.columnWidths,
    "--gutters":        props.gutters + "px",
  }

  return (
    <>
      <MagicControls {...props} />
      <div className="magic-table" ref={props.scrollRef} style={tableStyles}>
        
        
        <div className="magic-thead">
         <MagicRow {...props} {...props.headerRow}/>
        </div>
        
        <div onMouseLeave={props.onTableLeave} className="magic-tbody" ref={props.topRef}>
          
          {props.magicRows.map((row, index) => (
            <MagicRow key={index} {...row} {...props} />
          ))}
          
        </div>

      </div>
    </>
  );
};

export default MagesticalTable;


  
