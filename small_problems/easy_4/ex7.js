/*
function runningTotal(array) {
  let totalArray = [];
  let sum = 0;
  for (let index = 0; index < array.length; index++) {
    totalArray.push(sum += array[index]);
  }
  return totalArray;
}
*/
function runningTotal(array) {
  let total = 0;
  return array.map((element) => total += element);
}


console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []
