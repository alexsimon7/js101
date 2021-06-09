function twice(number) {
  let numString = number.toString();
  let numStringLength =  numString.length;
  if (numStringLength % 2 === 0) {
    if (numString.slice(0, numStringLength / 2) === 
        numString.slice(numStringLength / 2, numStringLength)) {
      return number;
    } else {
      return number * 2;
    }
  } else {
    return number * 2;
  }
}

console.log(twice(37));          // 74
console.log(twice(44));          // 44
console.log(twice(334433));      // 668866
console.log(twice(444));         // 888
console.log(twice(107));         // 214
console.log(twice(103103));      // 103103
console.log(twice(3333));        // 3333
console.log(twice(7676));        // 7676
