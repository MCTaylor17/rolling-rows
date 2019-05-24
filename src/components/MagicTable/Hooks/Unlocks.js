import { useState, useEffect } from "react";

const order = [
  [0, "volume"],
  [100, "displayLength"],
  [500, "transitionTime"],
  [1000, "themeChoice"],
  [2000, "borderRadius"],
  [3000, "gutters"],
  [5000, "rowHeight"],
];

const initialState = {
  displayLength: false,
  transitionTime: false,
  themeChoice: false,
  borderRadius: false,
  gutters: false,
  rowHeight: false,
};

const Unlocks = (furthestRow) => {
  const [unlocks, setUnlocks] = useState(initialState);
  
  useEffect(() => {
    let key, newState;
    
    while (order.length && order[0][0] < furthestRow) {
      key = order.shift()[1];
      newState = unlocks;
      newState[key] = true;
      setUnlocks(newState);
    };
  },[furthestRow]);
  
  return unlocks;
};

export default Unlocks;
