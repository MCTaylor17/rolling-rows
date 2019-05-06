import { useState, useEffect } from "react";

const MagicRows = (columnLayout, whichRows, tableData) => {
  const [magicRows, setMagicRows] = useState([]);

  useEffect(() => {
    const rows = whichRows.map(rowID => {
      const rowData = tableData[rowID] || [];

      const columns = columnLayout.map(layout => {
        const columnData = rowData[layout.label] || "???";
        return {layout, columnData};
      });

      return { rowID, columns };
    });

    setMagicRows(rows);
  },[whichRows, columnLayout, tableData]);
  
  return magicRows;
}

export default MagicRows;