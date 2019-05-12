import { useState, useEffect } from "react";

  
const WhichRows = (numberOfRows, middleRow, displayLength) => {
  const [whichRows, setWhichRows] = useState([]);
  
  useEffect(() => {
    const maxLength = Math.min(numberOfRows, displayLength);
    let start = middleRow - Math.floor(maxLength/2);
    let end = start + maxLength;

    if(start < 0) {
      end += start * -1;
      start = 0;
    } else if (end > numberOfRows) {
      start -= end - numberOfRows;
      end = numberOfRows;
    }

    const rows = [];
    for(let rowID = start; rowID < end; rowID++) {
      rows[rowID % maxLength] = rowID;
    }
    
    setWhichRows(rows);
    
  },[numberOfRows, middleRow, displayLength]);

  return whichRows;
}

export default WhichRows;
