import React from "react";
import * as ControlGroups from "./control-groups";
import "./styles/controls.scss";

const MagicControls = props => {
  const isChecked = name => name === props.themeChoice;
  
  const icons = {
    rowHeight: "icon fas fa-ruler-vertical",
    borderRadius: "icon fas fa-external-link-square-alt",
    gutters: "icon fas fa-grip-horizontal",
    displayLength: "icon fas fa-grip-lines",
    transitionTime: "icon fas fa-stopwatch",
    themeChoice: "icon fas fa-paint-brush",
  }
  
  return (
    <>
      {props.unlocks.displayLength ? (
        <div
          className="magic-controls">

          {props.unlocks.displayLength ? (
            <ControlGroups.DisplayLength {...props}/>
          ):null}

          {props.unlocks.transitionTime ? (
            <ControlGroups.TransitionTime {...props}/>
          ):null}

         {props.unlocks.borderRadius ? (
            <ControlGroups.BorderRadius {...props}/>
          ):null}

          {props.unlocks.themeChoice ? (
            <ControlGroups.ThemeChoice {...props}/>
          ):null}

          {props.unlocks.gutters ? (
            <ControlGroups.Gutters {...props}/>
          ):null}

          {props.unlocks.rowHeight ? (
            <ControlGroups.RowHeight {...props}/>
          ):null}

        </div>
      ):null}
    </>
  );
};

export default MagicControls;