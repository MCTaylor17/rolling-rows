import { useState, useEffect } from "react";
import { rowResponse$ } from "../api";

const TableData = () => {
  const [tableData, setTableData] = useState([]);
  
  useEffect(() => {
    const sub = rowResponse$.subscribe(data => {
      setTableData(data);
    });
    return () => sub.unsubscribe();
  },[]);

  return tableData;
}

export default TableData;