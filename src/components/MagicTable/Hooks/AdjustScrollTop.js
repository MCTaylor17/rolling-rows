import { useEffect } from "react";

const AdjustScrollTop = (middleRow, numberOfRows,rowHeight, gutters, tableTop) => {
  useEffect(() => {
    const isWithinTable = middleRow > 0 && middleRow < numberOfRows;

    if(isWithinTable) {
      const totalHeight = rowHeight + gutters;
      const halfViewport = window.innerHeight / 2;
      const middleOffset = middleRow * totalHeight;
      const newTop = middleOffset - halfViewport + tableTop;

      window.scrollTo(0, newTop)
    }
  },[numberOfRows,rowHeight, gutters, tableTop]);
}

export default AdjustScrollTop;
