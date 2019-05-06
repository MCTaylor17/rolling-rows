import React, { useState, useEffect, useRef } from "react";
import * as hooks from "./Hooks";
import MagesticalTable from "./MagesticalTable";
import magicPalette from "./styles/magicPalette.json";

const MagicTable = props => {
  const tableRef = useRef(null);

  const [rowHeight, setRowHeight] = useState(25);
  const onRowResize = height => {
    setRowHeight(height);
  }
  
  const [columnLayout, setColumnLayout] = useState([
    { label: "A", width: "25%", align: "right" },
    { label: "C", width: "50%", align: "center" },
    { label: "E", width: "25%", align: "left" }
  ]);
  
  const paletteOptions = Object.keys(magicPalette);
  const [palette, setPalette] = useState(magicPalette.unicorn);
  
  const onPaletteChange = option => {
    setPalette(magicPalette[option]);
  }
  
  const handlers = {
    onRowResize,
    onPaletteChange,
    paletteOptions,
  }
  
  // Hooks
  const tableData      = hooks.TableData();
  const numberOfRows   = hooks.NumberOfRows();
  const tableHeight    = hooks.TableHeight(rowHeight, numberOfRows);
  const tableTop       = hooks.TableTop(tableRef);
  const maxVisibleRows = hooks.MaxVisibleRows(rowHeight);  
  const topRow         = hooks.TopRow(tableTop, rowHeight, numberOfRows, maxVisibleRows);
  const whichRows      = hooks.WhichRows(numberOfRows, topRow, maxVisibleRows);
  
  const magicRows      = hooks.MagicRows(columnLayout, whichRows, tableData);
  const headerRow      = hooks.HeaderRow(columnLayout);
  console.log(magicRows, headerRow);
  
  
  const data = {
    rowHeight,
    numberOfRows,
    magicRows,
    headerRow,
    tableRef,
    palette,
    handlers
  }
  
  return (
    <>
      <MagesticalTable {...data} />
    </>
  );
};

export default MagicTable;