import { useState, useEffect } from "react";
import { winHeight$ } from "@/src/bus/window";

const MaxVisibleRows = (rowHeight) => {
  const [maxVisibleRows, setMaxVisibleRows] = useState(0);

  useEffect(() => {
    const sub = winHeight$.subscribe(winHeight => {
      setMaxVisibleRows(Math.ceil((winHeight / rowHeight) + 1));
    });
    return () => sub.unsubscribe();
  },[rowHeight])

  return maxVisibleRows;
}

export default MaxVisibleRows;