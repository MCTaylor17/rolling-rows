import React from "react";
import Row from "./Row";
import Controls from "./Controls";
import Hud from "./Hud";
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
      <Controls {...props} />
      <div className="magic-table" ref={props.scrollRef} style={tableStyles}>
        
        
        <div className="magic-thead">
         <Row {...props} {...props.headerRow}/>
        </div>
        
        <div onMouseLeave={props.onTableLeave} className="magic-tbody" ref={props.topRef}>
          <Hud {...props} />
          
          {props.magicRows.map((row, index) => (
            <Row key={index} {...row} {...props} />
          ))}
          
        </div>

      </div>
    </>
  );
};

export default MagesticalTable;


  
