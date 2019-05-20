import React from "react";
import "./styles/controls.scss";
import * as ControlGroups from "./control-groups";

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
          <ControlGroups.DisplayLength {...props}/>
      {props.unlocks.displayLength ? (
       
       
        <div
          className="magic-controls">

          {/*DisplayLength*/}
              {props.unlocks.displayLength ? (
          <div 
            className="control-group" 
            title="Adjust Visible Rows">
            <i 
              className={icons["displayLength"]}/>
            <label 
              className="hidden" 
              for="displayLength">Adjust Visible Rows</label>
            <input 
              className="reveal" 
              id="displayLength" 
              onChange={props.onDisplayLength} 
              value={props.displayLength} 
              type="range" 
              min="1" 
              max="40"/>
          </div>):null}


          {/*transitionTime*/}
              {props.unlocks.transitionTime ? (
          <div 
            className="control-group" 
            title="Adjust Animation Speed">
            <i 
              className={icons["transitionTime"]}/>
            <label 
              className="hidden" 
              for="transitionTime">Adjust Animation Speed</label>
            <input 
              className="reveal" 
              id="transitionTime" 
              onChange={props.onTransitionTime} 
              value={props.transitionTime} 
              type="range" 
              min="0" 
              max="3" 
              step="0.1"/>
          </div>):null}


          {/*borderRadius*/}
              {props.unlocks.borderRadius ? (
          <div 
            className="control-group" 
            title="Adjust Cell Roundness">
           <i 
             className={icons["borderRadius"]}/>
             <label 
               className="hidden" 
               for="borderRadius">Adjust Cell Roundness</label>
               <input 
                 className="reveal" 
                 id="borderRadius" 
                 onChange={props.onBorderRadius} 
                 value={props.borderRadius} 
                 type="range" 
                 min="0" 
                 max="45"/>
          </div>):null}


          {/*ThemeChoice*/}
              {props.unlocks.themeChoice ? (
          <div
            className="control-group"
            title="Change Theme">
            <i
              className={icons["themeChoice"]}/>

              {Object.keys(props.themes).map(name => (
                <>
                  <label 
                    className={"reveal theme-choice" + (isChecked(name) ? " checked" : "")} 
                    for={name} 
                    title={name}>{props.themes[name].emoji}
                  </label>
                  <input 
                    className="hidden" 
                    onChange={props.onThemeChoice} 
                    id={name} 
                    type="radio" 
                    name="theme" 
                    checked={isChecked(name)}
                    value={name}/>
                </>
              ))}

          </div>):null}


          {/*Gutters*/}
          {props.unlocks.gutters ? (
          <div 
            className="control-group" 
            title="Adjust Cell Spacing">
            <i 
              className={icons["gutters"]}/>
            <label 
              className="hidden" 
              for="gutters">Adjust Cell Spacing</label>
            <input 
              className="reveal" 
              id="gutters" 
              onChange={props.onGutters} 
              value={props.gutters} 
              type="range" 
              min="0" 
              max="30"/>
          </div>):null}


          {/*rowHeight*/}
          {props.unlocks.rowHeight ? (
          <div 
            className="control-group" 
            title="Adjust Row Height">
            <i 
              className={icons["rowHeight"]}/>
            <label 
              className="hidden" 
              for="rowHeight">Adjust Row Height</label>
            <input 
              className="reveal" 
              id="rowHeight" 
              onChange={props.onRowHeight} 
              value={props.rowHeight} 
              type="range" 
              min="25" 
              max="50"/>
           </div>):null}

        </div>
      ):null}
    </>
  );
};

export default MagicControls;