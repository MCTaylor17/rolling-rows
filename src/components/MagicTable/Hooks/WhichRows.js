import { useState, useEffect } from "react";

  
const WhichRows = (numberOfRows, topRow, maxVisibleRows) => {
  const [whichRows, setWhichRows] = useState([]);
  
  const getRows = (theStart, length) => {
    const newRows = [];
    
    for(let i = 0; i < length; i++) {
      const id = theStart + i;
      const whichSlot = id % length;
      
      newRows[whichSlot] = id;
    }
    
    return newRows;
  };
  
  useEffect(() => {
    const arraySize = Math.min(numberOfRows,maxVisibleRows);
    const theEnd = Math.max(numberOfRows - arraySize,0);
    const theStart = Math.max(Math.min(topRow, theEnd),0);
    const length = Math.min(arraySize, theEnd);  
    
    setWhichRows(getRows(theStart, length));
    
  },[numberOfRows, topRow, maxVisibleRows]);

  return whichRows;
}

export default WhichRows;

/*
  const thisRowData = rowData[id] || [];
  const getColumns = (thisRowData) => {
    return columnLayout.map(layout => {
      const column = {
        text: thisRowData[layout.label] || "",
        ...layout
      }
      return column;
    });
  };
  const columns = getColumns(thisRowData)

*/