const fs = require("fs");
const range = require("rxjs").range;
const tap = require("rxjs/operators").tap;
const map = require("rxjs/operators").map;
const mapTo = require("rxjs/operators").mapTo;
const toArray = require("rxjs/operators").toArray;
 
const desiredRows = 1000;
const desiredCols = 4;

const desiredRows$ = range(1,desiredRows);


const createRow = desiredCols => {
  const data = {};
  
  while(desiredCols) {
    data[`col${desiredCols}`] = Math.random().toFixed(4);
    desiredCols--;
  }
  
  return data;
}

const rows$ = desiredRows$.pipe(
  mapTo(desiredCols),
  map(createRow),
  tap(console.log),
  toArray());

rows$.subscribe(rows => {
  fs.writeFile("table-rows.json","export default " + JSON.stringify(rows,null," "), console.log);
})