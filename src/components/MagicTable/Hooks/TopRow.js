import { useState, useEffect } from "react";
import { winScrollTop$ } from "@/src/bus/window";

const TopRow = (tableTop, rowHeight, numberOfRows) => {
  const [topRow, setTopRow] = useState(0)
  
  useEffect(() => {
    const sub = winScrollTop$.subscribe(scrollTop => {
      let newTopRow = Math.floor((scrollTop - tableTop)/rowHeight);

      newTopRow = Math.max(newTopRow, 0);
      newTopRow = Math.min(newTopRow, numberOfRows);
      
      setTopRow(newTopRow);
    });

    return () => sub.unsubscribe();
  },[tableTop, rowHeight, numberOfRows]);
  
  return topRow;
}

export default TopRow;