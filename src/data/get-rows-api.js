import rowData from "./row-data";

  console.log(rowData);
const getRange = (from, to) => {
  const segment = rowData.slice(from,to +1);
  console.log(segment);
  return segment;
}
const minWait = 1000;
const maxWait = 5000;

const getDelay = _ => {
  const delay = ~~(Math.random() * (maxWait - minWait) + minWait);
  console.log(delay);
  return delay;
}

const delayedReponse = (...args) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(getRange(...args)), getDelay())
  });
}

const getRowsLength = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(rowData.length), getDelay())
  });
}

export default delayedReponse;
export { getRowsLength };