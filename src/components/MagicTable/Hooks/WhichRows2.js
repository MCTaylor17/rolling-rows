import { useState, useEffect } from "react";

  
const WhichRows2 = (numberOfRows, middleRow, displayLength) => {
  const [whichRows2, setWhichRows2] = useState([]);
  
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
    
    setWhichRows2(rows);
    
  },[numberOfRows, middleRow, displayLength]);

  return whichRows2;
}

export default WhichRows2;
