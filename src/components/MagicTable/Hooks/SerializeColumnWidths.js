import { useState, useEffect } from "react";
import { pluck, map, toArray } from "rxjs/operators";
import { from } from "rxjs";

const delimiter = "|";

const SerializeColumnWidths = (columnLayout) => {
  const [ magesticalColumnWidths, setMagesticalColumnWidths] = useState("100%");
  useEffect(() => {
    const sub = from(columnLayout).pipe(
      pluck("width"),
      toArray(),
      map(widths => widths.join("|")),
    ).subscribe(setMagesticalColumnWidths);

    return () => sub.unsubscribe();
  },[columnLayout]);
  
  return magesticalColumnWidths;
}

export default SerializeColumnWidths;