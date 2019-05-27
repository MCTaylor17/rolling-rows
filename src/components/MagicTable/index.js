import React, { useState, useEffect, useRef } from "react";

// Magic Hooks
import * as hooks from "./Hooks";
import * as handlers from "./Handlers";
import Table from "./Table";
import themes from "./styles/themes";
import playKeys from "../../keys";


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
  const topRef         = useRef(null);
  const numberOfRows   = hooks.NumberOfRows();
  const tableTop       = hooks.TableTop(topRef);
  const middleRow      = hooks.MiddleRow(tableTop, rowHeight, numberOfRows, gutters);
  const furthestRow    = hooks.FurthestRow(middleRow);
  const unlocks        = hooks.Unlocks(furthestRow);
  const whichRows      = hooks.WhichRows(numberOfRows, middleRow, displayLength);
  const headerRow      = hooks.HeaderRow(columnLayout);
  const tableData      = hooks.TableData();
  const magicRows      = hooks.MagicRows(columnLayout, whichRows, tableData, activeColumn);
  const columnWidths   = hooks.SerializeColumnWidths(columnLayout);
  hooks.AdjustScrollTop(middleRow, numberOfRows,rowHeight, gutters, tableTop);
  
  const [volume, setVolume] = useState(.5);
  const onVolume = e => {
    setVolume(parseFloat(e.target.value));
  }

  const prev = useRef(0); // move state into keys
  useEffect(() => {
    const fadeDuration = transitionTime * 200 + 100;
    playKeys(middleRow, prev.current, volume, fadeDuration);
    prev.current = middleRow;
  },[middleRow]);

  const [isOutside, setIsOutside] = useState(true);
  useEffect(()=> {
    const isFirstRow = middleRow === 0;
    const isLastRow = middleRow === numberOfRows;
    const isEntering = isOutside && !isFirstRow && !isLastRow && props.onEnter; 
    const isExitingTop = isFirstRow && !isLastRow && !isOutside && props.onExitTop;
    const isExitingBottom = isLastRow && !isFirstRow && !isOutside && props.onExitBottom;

    if(isEntering) {
      console.log({isEntering})
      setIsOutside(false);
      props.onEnter();
    }
    if(isExitingTop) {
      console.log({isExitingTop})
      console.log()
      setIsOutside(true);
      props.onExitTop();
    }
    if(isExitingBottom) {
      console.log({isExitingBottom})
      setIsOutside(true);
      props.onExitBottom();
    }
  }, [middleRow, numberOfRows]);
  
  const properties = {
    onTransitionTime,
    onDisplayLength,
    onBorderRadius,
    transitionTime,
    displayLength,
    onThemeChoice,
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
    onVolume,
    unlocks,
    gutters,
    themes,
    topRef,
  }
  
  const failure = [
    "Ever Tried?",
    " ",
    " ",
    "Ever Failed?",
    " ",
    " ",
    "No Matter.",
    " ",
    " ",
    "Try Again.",
    " ",
    " ",
    "Fail Again.",
    " ",
    " ",
    "Fail Better!",
    " ",
    " ",
  ]
  
  return (
    <>
     <Table {...properties} />
     <section id="failure">
        <p>Ever Tried</p>
        <p>Ever Failed</p>
        <p>No Matter</p>
        <p>Try Again</p>
        <p>Fail Again</p>
        <p>Fail Better</p>
     </section>
    </>
  );
};

export default MagicTable;