import React from "react";

const ThemeChoice = props => {
  const icons = {
    rowHeight: "icon fas fa-ruler-vertical",
    borderRadius: "icon fas fa-external-link-square-alt",
    gutters: "icon fas fa-grip-horizontal",
    displayLength: "icon fas fa-grip-lines",
    transitionTime: "icon fas fa-stopwatch",
    themeChoice: "icon fas fa-paint-brush",
  }
  
  const isChecked = name => name === props.themeChoice;
  
  return (
    <>
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

      </div>
    </>
  );
};

export default ThemeChoice;