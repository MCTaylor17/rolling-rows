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
  const data = rowData.slice(firstRow,lastRow +1);
  const delay = randomIntBetween([1000, 5000]);
  
  return delayedData(delay, data);
}

// @returns number of rows
const getRowsLength = () => {
  const data = rowData.length;
  const delay = randomIntBetween([1000, 2000]);
  
  return delayedData(delay, data);
}


export { getRowsLength, getRowsBetween };