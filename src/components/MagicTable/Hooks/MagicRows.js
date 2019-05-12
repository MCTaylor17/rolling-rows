import { useState, useEffect } from "react";

const MagicRows = (columnLayout, whichRows, tableData, activeColumn) => {
  const [magicRows, setMagicRows] = useState([]);

  useEffect(() => {
    const rows = whichRows.map(rowID => {
      const rowData = tableData[rowID] || [];

      const columns = columnLayout.map(layout => {
        const columnData = rowData[layout.label] || "???";
        const isActive = activeColumn === layout.label;
        
        return {layout, columnData, isActive};
      });
      
      return { rowID, columns };
    });

    setMagicRows(rows);
  },[whichRows, columnLayout, tableData, activeColumn]);
  
  return magicRows;
}

export default MagicRows;