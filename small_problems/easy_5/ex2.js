function union(array1, array2) {
  let newArray = array1.slice();
  for (let index = 0; index < array2.length; index++) {
    if (!(newArray.includes(array2[index]))) {
      newArray.push(array2[index]);
    }
  }
  return newArray;
}

console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]
