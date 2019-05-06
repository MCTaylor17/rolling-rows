import { useState, useEffect } from "react";
import { winHeight$ } from "@/src/bus/window";

const MaxVisibleRows = (rowHeight) => {
  const getMaxVisible = (winHeight) => {
    return Math.ceil((winHeight / rowHeight) + 1)
  };
  
  const [maxVisibleRows, setMaxVisibleRows] = useState(0);
  useEffect(() => {
    setMaxVisibleRows(getMaxVisible(window.innerHeight));
    
    const sub = winHeight$.subscribe(winHeight => {
      setMaxVisibleRows(getMaxVisible(winHeight));
    });
    
    return () => sub.unsubscribe();
  },[rowHeight])

  return maxVisibleRows;
}

export default MaxVisibleRows;