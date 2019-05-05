import "./styles/index.scss";

import React, { useState, useEffect, useRef } from "react";
import * as hooks from "./Hooks";

const MagicTable = props => {
  // Hard Coded Props
  const Hcrops = {
    rowHeight: 25,
    tableClass: "magic-table",
    rowClass: "magic-row",
    colClass: "magic-column",
    palette: [
      "#ff8686",
      "#ffc892",
      "#ffffbb",
      "#b0ffb0",
      "#a1a1ff",
      "#986abb",
      "#c094d3",
    ],
  };
  
  const tableRef = useRef(null);
  const [rowHeight, setRowHeight] = useState(Hcrops.rowHeight)
  
  // Hooks
  const rowData          = hooks.RowData();
  const numberOfRows     = hooks.NumberOfRows();
  const tableHeight      = hooks.TableHeight(rowHeight, numberOfRows);
  const tableTop         = hooks.TableTop(tableRef);
  const maxVisibleRows   = hooks.MaxVisibleRows(rowHeight);  
  const topRow           = hooks.TopRow(tableTop, rowHeight, numberOfRows, maxVisibleRows);
  const magicRows        = hooks.MagicRows(numberOfRows, topRow, maxVisibleRows, rowData, rowHeight, Hcrops.palette);
    
  return (
    <>
      <div className={Hcrops.tableClass} ref={tableRef} style={{height: tableHeight, position: "relative"}}>
        
        {magicRows.map((row, index) => {
         
          return (
            <div className={Hcrops.rowClass} key={index} style={{top: row.top + 1, height: rowHeight, background: row.bgColor, zIndex: row.id}}>
              {row.id}
            </div>
          )

        })}
        
      </div>
    </>
  );
};

export default MagicTable;