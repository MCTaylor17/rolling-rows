import rowData from "./row-data";

// @returns "random" integer between range
const randomIntBetween = ([min, max]) => {
  return ~~(Math.random() * (max - min) + min);
}

// @returns promise with data after delay
const delayedData = (delay, data) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(data), delay)
  });
}

// @returns a slice of data
const getRowsBetween = ([firstRow, lastRow]) => {
  let fakeRowData = rowData;
  while(fakeRowData.length < lastRow - firstRow) {
    fakeRowData = fakeRowData.concat(fakeRowData);
  }
  const data = fakeRowData.slice(firstRow,lastRow +1);
  const delay = randomIntBetween([100, 500]);
  
  return delayedData(delay, data);
}

// @returns number of rows
const getNumberOfRows = () => {
  const length = rowData.length;
  const fakeLength = 10000;
  const delay = randomIntBetween([100, 200]);
  
  return delayedData(delay, fakeLength);
}


export { getNumberOfRows, getRowsBetween };