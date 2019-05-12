import { useState, useEffect } from "react";
import { winScrollTop$ } from "@/src/bus/window";

const clamp = (current, lower, upper) => {
  let clamped = current;
  clamped = Math.max(clamped, lower);
  clamped = Math.min(clamped, upper);
  return clamped;
}

const MiddleRow = (tableTop, rowHeight, numberOfRows, gutters) => {
  const [middleRow, setMiddleRow] = useState(0);  
  
  useEffect(() => {
    const sub = winScrollTop$.subscribe(scrollTop => {
      const tableTopOffset = scrollTop - tableTop;
      const viewportOffset = window.innerHeight * .5;
      const    totalOffset = tableTopOffset + viewportOffset;
      const totalRowHeight = rowHeight + gutters;

      const newMiddleRow = Math.floor(totalOffset/totalRowHeight);
      
      setMiddleRow(clamp(newMiddleRow,0,numberOfRows));
    });

    return () => sub.unsubscribe();
  },[tableTop, rowHeight, numberOfRows, gutters]);
  
  return middleRow;
}

export default MiddleRow;