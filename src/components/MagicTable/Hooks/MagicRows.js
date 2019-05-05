import { useState, useEffect } from "react";

const MagicRows = (numberOfRows, topRow, maxVisibleRows, rowData, rowHeight, palette) => {
  const [magicRows, setMagicRows] = useState([]);
  
  useEffect(() => {
    const rows = [];
    const arraySize = Math.min(numberOfRows,maxVisibleRows);
    const theEnd = Math.max(numberOfRows - arraySize,0);
    let pointer = Math.max(Math.min(topRow, theEnd),0);
    let length = Math.min(arraySize, theEnd);
    
    while (length > 0) {
      const row = {};
      row.id = pointer;
      row.data = rowData[pointer];
      row.top = rowHeight * pointer;
      row.bgColor = palette[row.id % palette.length];
      
      rows[pointer % arraySize] = row;
      
      length--;
      pointer++;
    }
    setMagicRows(rows);
  },[numberOfRows, topRow, maxVisibleRows, rowData, rowHeight]);

  return magicRows;
}

export default MagicRows;