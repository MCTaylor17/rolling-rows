import React from "react";

const MagicControls = props => {
  
  const handlePaletteChange = event => {
    props.onPaletteChange(event.target.value);
  }
  
  const handleRowResize = event => {
    props.onRowResize(event.target.value)
  }
  
  return (
    <>
      <div className="controls">
        <div>
          <input type="range" onChange={handleRowResize}/>
        </div>
        {props.paletteOptions.map(option => (
          <div>
            <input type="radio" id={"palette_" + option} value={option} name="palette" onChange={handlePaletteChange} />
            <label for={"palette_" + option}>{option.slice(0,1).toUpperCase() + option.slice(1)}</label>
          </div>
        ))}
      </div>
    </>
  );
};

export default MagicControls;