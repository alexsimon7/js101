function multiplyAllPairs(arr1, arr2) {
  let multipliedArray = [];
  for (let index = 0; index < arr1.length; index++) {
    for( let index2 = 0; index2 < arr2.length; index2++) {
      multipliedArray.push(arr1[index] * arr2[index2]);
    }
  }
  return multipliedArray.sort((num1, num2) => num1 - num2);
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]
