import { useState, useEffect } from "react";

const HeaderRow = columnLayout => {
  const [headerRow,setHeaderRow] = useState({
    label: "",
    columns:[]
  });

  useEffect(() => {
    const columns = columnLayout.map(layout => {
      return {
        layout,
        columnData: layout.label
      };
    });

    const rowData = {
      rowID: 0,
      columns
    }
    setHeaderRow(rowData);
  },[columnLayout]);

  return headerRow;
}

export default HeaderRow;