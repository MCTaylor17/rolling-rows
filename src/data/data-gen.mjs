const fs = require("fs");
const range = require("rxjs").range;
const tap = require("rxjs/operators").tap;
const map = require("rxjs/operators").map;
const mapTo = require("rxjs/operators").mapTo;
const toArray = require("rxjs/operators").toArray;
 
const columnNames = ["A","B","C","D","E","F","G"];
const desiredCols = columnNames.length;
const desiredRows = 1000;
const desiredRows$ = range(1,desiredRows);

const createRow = index => {
  const data = {};
  
  columnNames.forEach(name => {
    data[name] = Math.random().toFixed(4);
  });
  return data;
}

const rows$ = desiredRows$.pipe(
  tap(console.log),
  map(createRow),
  toArray());

rows$.subscribe(rows => {
  fs.writeFile("table-rows.json","export default " + JSON.stringify(rows,null," "), console.log);
})