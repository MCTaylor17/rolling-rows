import { of, from } from "rxjs";
import { map, mergeMap, startWith } from "rxjs/operators";
import { getRowsBetween, getNumberOfRows } from "@/src/data/get-rows-api";

const numberOfRows$ = from(getNumberOfRows());

// Assume all rows for now
const rowRequest$ = numberOfRows$.pipe(
  map(rows => [0,rows - 1])
);

const rowResponse$ = rowRequest$.pipe(
  mergeMap(range => getRowsBetween(range)),
);

export { numberOfRows$, rowResponse$ }