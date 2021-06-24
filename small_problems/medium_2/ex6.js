function squaredSum(number) {
  let sum = 0;
  while (number >= 1) {
    sum += number;
    number -=1;
  }
  return sum **2;
}


function sumOfSquared(number) {
  let sum = 0;
  while (number >= 1) {
    sum += (number ** 2);
    number -=1;
  }
  return sum;
}


function sumSquareDifference(number) {
  return squaredSum(number) - sumOfSquared(number);
}


console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150
