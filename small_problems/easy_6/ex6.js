function sequence(number) {
  let seqArray = [];
  for (let index = 1; index <= number; index++) {
    seqArray.push(index);
  }
  return seqArray;
}

console.log(sequence(5));    // [1, 2, 3, 4, 5]
console.log(sequence(3));    // [1, 2, 3]
console.log(sequence(1));    // [1]



