import { useState, useEffect } from "react";

const FurthestRow = (middleRow) => {
  const [furthestRow, setFurthestRow] = useState(0);  
  
  useEffect(() => {
    if(middleRow > furthestRow) {
      setFurthestRow(middleRow);
    }
  },[middleRow]);
  
  return furthestRow;
}

export default FurthestRow;