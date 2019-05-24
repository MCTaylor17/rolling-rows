import React from "react";
import * as ControlGroups from "./control-groups";
import "./styles/controls.scss";

const MagicControls = props => {
  
  return (
    <>
      <div
        className="magic-controls">

        <ControlGroups.Volume {...props}/>

        {props.unlocks.displayLength ? (
          <ControlGroups.DisplayLength {...props}/>
        ):null}

        {props.unlocks.transitionTime ? (
          <ControlGroups.TransitionTime {...props}/>
        ):null}

        {props.unlocks.themeChoice ? (
          <ControlGroups.ThemeChoice {...props}/>
        ):null}

       {props.unlocks.borderRadius ? (
          <ControlGroups.BorderRadius {...props}/>
        ):null}

        {props.unlocks.gutters ? (
          <ControlGroups.Gutters {...props}/>
        ):null}

        {props.unlocks.rowHeight ? (
          <ControlGroups.RowHeight {...props}/>
        ):null}

      </div>
    </>
  );
};

export default MagicControls;