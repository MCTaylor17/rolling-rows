import React from "react";

const Volume = props => {

  return (
    <>
      <div 
        className="control-group" 
        title="Tune your instrument">
        <i 
          className="icon fas fa-music"/>
        <label 
          className="hidden" 
          for="volume">Tune your Instrument</label>
        <input 
          className="reveal" 
          id="volume" 
          onChange={props.onVolume} 
          value={props.volume} 
          type="range" 
          min="0" 
          max="1"
          step="0.05"/>
      </div>
    </>
  );
};

export default Volume;