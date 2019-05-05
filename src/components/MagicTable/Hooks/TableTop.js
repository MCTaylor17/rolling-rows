import { useState, useEffect } from "react";
import { onResize$, onLoad$ } from "@/src/bus/window";
import { merge } from "rxjs";

const TableTop = (tableRef) => {
  const [tableTop, setTableTop] = useState(0);
  
  useEffect(() => {
    setTableTop(tableRef.current.offsetTop);
    
    const sub = onResize$.subscribe(() => {
      console.log("Table Top Resized");
      setTableTop(tableRef.current.offsetTop);
    })
    
    return () => sub.unsubscribe();
  },[]);
  
  return tableTop;
}

export default TableTop;