function multiplicativeAverage(arr) {
  let total = arr.reduce((sum, current) => sum *= current);
  let average = total / (arr.length);
  return average.toFixed(3);
}

console.log(multiplicativeAverage([3, 5]));                   // "7.500"
console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"
