import { useState, useEffect } from "react";
import { rowResponse$ } from "../api";

const RowData = () => {
  const [rowData, setRowData] = useState([]);
  
  useEffect(() => {
    const sub = rowResponse$.subscribe(data => {
      setRowData(data);
    });
    return () => sub.unsubscribe();
  },[]);

  return rowData;
}

export default RowData;