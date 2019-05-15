import React from "react";
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
  
  const unlockedAt = rowNumber => {
    if(props.furthestRow > rowNumber) {
      return { display: "block" }
    }
    return { display: "none" }
  }
  
  const unlocks = {
    themeChoice: unlockedAt(100),
    displayLength: unlockedAt(250),
    transitionTime: unlockedAt(500),
    borderRadius: unlockedAt(1000),
    gutters: unlockedAt(2000),
    rowHeight: unlockedAt(3000),
  }
  
  return (
    
    <>
      <div
        className="magic-controls" 
        style={unlocks.themeChoice}>
        
        {/*ThemeChoice*/}
        <div
          className="control-group"
          title="Change Theme" 
          style={unlocks.themeChoice}>
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

        </div>
        
        {/*DisplayLength*/}
        <div 
          className="control-group" 
          title="Adjust Visible Rows" 
          style={unlocks.displayLength}>
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
        </div>
        
        
        {/*transitionTime*/}
        <div 
          className="control-group" 
          title="Adjust Animation Speed" 
          style={unlocks.transitionTime}>
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
            max="5" 
            step="0.5"/>
        </div>
        
        
        {/*borderRadius*/}
        <div 
          className="control-group" 
          title="Adjust Cell Roundness" 
          style={unlocks.borderRadius}>
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
        </div>
        
        
        {/*Gutters*/}
        <div 
          className="control-group" 
          title="Adjust Cell Spacing" 
          style={unlocks.gutters}>
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
        </div>
        
        
        {/*rowHeight*/}
        <div 
          className="control-group" 
          title="Adjust Row Height" 
          style={unlocks.rowHeight}>
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
         </div>
        
      </div>
    </>
  );
};

export default MagicControls;