import React from "react";
import "./styles/hud.scss";

const Hud = props => {

  const styles = {
    "--furthestRow": props.furthestRow
  }
  const middle = {
    "--furthestRow": props.middleRow
  }
  const middleRow = () => {
    if(props.middleRow < props.furthestRow) {
      return <div className="middle-row" style={middle}>{props.middleRow}</div>
    }
    return null;
  }
  return (
    <>
      <div className="furthest-row" style={styles}>{props.furthestRow}</div>
    
      {middleRow()}
    </>
  );
};

export default Hud;