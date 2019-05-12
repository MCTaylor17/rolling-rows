import React, { useState, useEffect, useRef } from "react";

// Magic Hooks
import * as hooks from "./Hooks";
import * as handlers from "./Handlers";
import MagesticalTable from "./MagesticalTable";
import magicPalette from "./styles/magicPalette";

const MagicTable = props => {
  const [columnLayout, setColumnLayout] = useState([
    { label: "A", width: "22%", align: "right" },
    { label: "C", width: "12%", align: "center" },
    { label: "E", width: "17%", align: "left" },
    { label: "B", width: "17%", align: "right" },
    { label: "F", width: "17%", align: "center" },
    { label: "G", width: "15%", align: "left" },
  ]);
  
  const [activeColumn, onCellEnter, onTableLeave] = handlers.ActiveColumn();
  const [transitionTime, onTransitionTime] = handlers.TransitionTime();
  const [paletteChoice, onPaletteChoice] = handlers.PaletteChoice("unicorn");
  const [displayLength, onDisplayLength] = handlers.DisplayLength();
  const [borderRadius, onBorderRadius] = handlers.BorderRadius();
  const [rowHeight, onRowHeight] = handlers.RowHeight();
  const [gutters, onGutters] = handlers.Gutters();
  const scrollRef      = useRef(null);
  const topRef         = useRef(null);
  const numberOfRows   = hooks.NumberOfRows();
  const tableTop       = hooks.TableTop(topRef);
  const middleRow      = hooks.MiddleRow(tableTop, rowHeight, numberOfRows, gutters);
  const whichRows     = hooks.WhichRows(numberOfRows, middleRow, displayLength);
  const headerRow      = hooks.HeaderRow(columnLayout);
  const tableData      = hooks.TableData();
  const magicRows      = hooks.MagicRows(columnLayout, whichRows, tableData, activeColumn);
  const columnWidths   = hooks.SerializeColumnWidths(columnLayout);
  const paletteOptions = Object.keys(magicPalette);
  const activePalette  = magicPalette[paletteChoice];

  const properties = {
    onTransitionTime,
    onDisplayLength,
    onPaletteChoice,
    onBorderRadius,
    transitionTime,
    paletteOptions,
    displayLength,
    paletteChoice,
    activePalette,
    columnWidths,
    borderRadius,
    numberOfRows,
    onTableLeave,
    onRowHeight,
    onCellEnter,
    onGutters,
    rowHeight,
    rowHeight,
    headerRow,    
    magicRows,
    scrollRef,
    gutters,
    topRef,
  }
  
  return (
    <>
      <MagesticalTable {...properties} />
    </>
  );
};

export default MagicTable;