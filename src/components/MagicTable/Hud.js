import React from "react";
import "./styles/hud.scss";

const Hud = props => {

  const styles = {
    "--furthestRow": props.furthestRow
  }
  return (
    <>
      <div className="furthest-row" style={styles}>{props.furthestRow}</div>
    </>
  );
};

export default Hud;