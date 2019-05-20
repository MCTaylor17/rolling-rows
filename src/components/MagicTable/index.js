import React, { useState, useEffect, useRef } from "react";

// Magic Hooks
import * as hooks from "./Hooks";
import * as handlers from "./Handlers";
import Table from "./Table";
import themes from "./styles/themes";


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
  const [themeChoice, onThemeChoice] = handlers.ThemeChoice("sheets");
  const [displayLength, onDisplayLength] = handlers.DisplayLength();
  const [borderRadius, onBorderRadius] = handlers.BorderRadius();
  const [rowHeight, onRowHeight] = handlers.RowHeight();
  const [gutters, onGutters] = handlers.Gutters();
  const scrollRef      = useRef(null);
  const topRef         = useRef(null);
  const numberOfRows   = hooks.NumberOfRows();
  const tableTop       = hooks.TableTop(topRef);
  const middleRow      = hooks.MiddleRow(tableTop, rowHeight, numberOfRows, gutters);
  const furthestRow    = hooks.FurthestRow(middleRow);
  const whichRows      = hooks.WhichRows(numberOfRows, middleRow, displayLength);
  const headerRow      = hooks.HeaderRow(columnLayout);
  const tableData      = hooks.TableData();
  const magicRows      = hooks.MagicRows(columnLayout, whichRows, tableData, activeColumn);
  const columnWidths   = hooks.SerializeColumnWidths(columnLayout);
  
  /* Closes #8
  
  Suggested approach:
  "So basically hold the screen in place with scrollTop = middleRow.offsetTop."

  Revised:
  * observe tableTop, rowHeight and gutters
  * Set scrollTop to tableTop + middleRow * (rowHeight + gutters);
  
  */
  
  useEffect(() => {
    const newTop = tableTop + middleRow * (rowHeight + gutters);
    window.scrollTo(0, newTop)
  },[tableTop, rowHeight, gutters]);
  
  /*
  
  BUGS:
  * Seams to be scrolling to the top of the page until resize, etc stops
    -> Add 1/2 window height;
    
  * Scrolls to 0 row on load
    -> if middleRow > 0;
  
  Check:
  * Conflicts with scrollHandlers
  * Not changing middleRow
  
  */

  const properties = {
    onTransitionTime,
    onDisplayLength,
    onThemeChoice,
    onBorderRadius,
    transitionTime,
    displayLength,
    columnWidths,
    borderRadius,
    numberOfRows,
    onTableLeave,
    themeChoice,
    furthestRow,
    onRowHeight,
    onCellEnter,
    onGutters,
    rowHeight,
    rowHeight,
    headerRow,
    middleRow,
    magicRows,
    scrollRef,
    gutters,
    themes,
    topRef,
  }
  
  return (
    <>
      <Table {...properties} />
    </>
  );
};

export default MagicTable;