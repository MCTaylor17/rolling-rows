import { useState, useEffect } from "react";

const TableHeight = (rowHeight, numberOfRows) => {
  const [tableHeight, setTableHeight] = useState(0);
  
  useEffect(() => {
    setTableHeight(numberOfRows * rowHeight);
  },[rowHeight, numberOfRows]);

  return tableHeight
}

export default TableHeight;