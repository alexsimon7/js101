function halvsies(array) {
  let splitArray = [];
  let arrayLen = array.length;
  let arrayCenter = Math.ceil(arrayLen / 2);

  splitArray[0] = array.slice(0, arrayCenter);
  splitArray[1] = array.slice(arrayCenter);

  return splitArray;
}

console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]
