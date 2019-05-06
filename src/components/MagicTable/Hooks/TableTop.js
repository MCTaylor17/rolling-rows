import { useState, useEffect } from "react";
import { onResize$, onLoad$ } from "@/src/bus/window";
import { merge } from "rxjs";

const TableTop = (tableRef) => {
  const currentTop = () => {
    return tableRef.current.getBoundingClientRect().top + document.documentElement.scrollTop;
  }
  
  const [tableTop, setTableTop] = useState(0);
  
  useEffect(() => {
    setTableTop(currentTop());
    
    const sub = onResize$.subscribe(() => {
      setTableTop(currentTop());
    })
    
    return () => sub.unsubscribe();
  },[]);
  
  return tableTop;
}

export default TableTop;