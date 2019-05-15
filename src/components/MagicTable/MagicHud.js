import React from "react";
import "./styles/hud.scss";

const MagicHud = props => {

  const styles = {
    "--furthestRow": props.furthestRow
  }
  return (
    <>
      <div className="furthest-row" style={styles}>{props.furthestRow}</div>
    </>
  );
};

export default MagicHud;