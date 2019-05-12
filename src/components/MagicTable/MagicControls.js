import React from "react";
import "./styles/controls.scss";

const MagicControls = props => {
  const isChecked = option => option === props.paletteChoice;
  const paletteIcons = {
    box: "📦",
    unicorn: "🦄",
    rainbow: "🌈",
    trafficLight: "🚦",
    wave: "🌊",
  }
  
  const icons = {
    rowHeight: "icon fas fa-ruler-vertical",
    borderRadius: "icon fas fa-external-link-square-alt",
    gutters: "icon fas fa-grip-horizontal",
    displayLength: "icon fas fa-grip-lines",
    transitionTime: "icon fas fa-stopwatch",
    paletteChoice: "icon fas fa-paint-brush",
  }
  
  return (
    <>
      <div className="magic-controls">
        
        <div className="control-group" title="Change Theme">
          <i className={icons["paletteChoice"]}/>

            {props.paletteOptions.map(option => (
             <>
               <label className={"reveal palette-choice" + (isChecked(option) ? " checked" : "")} for={option} title={option}>{paletteIcons[option]}</label>
               <input className="hidden" onChange={props.onPaletteChoice} id={option} type="radio" name="palette" checked={isChecked(option)} value={option}/>
             </>
            ))}

        </div>
        
        
        <div className="control-group" title="Adjust Visible Rows">
          <i className={icons["displayLength"]}/>
          <label className="hidden" for="displayLength">Adjust Visible Rows</label>
          <input className="reveal" id="displayLength" onChange={props.onDisplayLength} value={props.displayLength} type="range" min="1" max="50"/>
        </div>
        
        
        <div className="control-group" title="Adjust Row Height">
          <i className={icons["rowHeight"]}/>
          <label className="hidden" for="rowHeight">Adjust Row Height</label>
          <input className="reveal" id="rowHeight" onChange={props.onRowHeight} value={props.rowHeight} type="range" min="18" max="100"/>
        </div>
        
        
        <div className="control-group" title="Adjust Cell Spacing">
          <i className={icons["gutters"]}/>
          <label className="hidden" for="gutters">Adjust Cell Spacing</label>
          <input className="reveal" id="gutters" onChange={props.onGutters} value={props.gutters} type="range" min="0" max="50"/>
        </div>
        
        
        <div className="control-group" title="Adjust Cell Roundness">
          <i className={icons["borderRadius"]}/>
          <label className="hidden" for="borderRadius">Adjust Cell Roundness</label>
          <input className="reveal" id="borderRadius" onChange={props.onBorderRadius} value={props.borderRadius} type="range" min="0" max="15"/>
        </div>
        
        
        <div className="control-group" title="Adjust Animation Speed">
          <i className={icons["transitionTime"]}/>
          <label className="hidden" for="transitionTime">Adjust Animation Speed</label>
          <input className="reveal" id="transitionTime" onChange={props.onTransitionTime} value={props.transitionTime} type="range" min="0" max="10" step="0.1"/>
        </div>
        
        
      </div>
    </>
  );
};

export default MagicControls;