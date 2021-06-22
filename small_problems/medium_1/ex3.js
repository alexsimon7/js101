function rotateRightmostDigits(string, count) {
  let moveNumber = string.slice(-count, -count + 1);
  return string.replace(moveNumber, '').concat(moveNumber);
}

function maxRotation(number) {
  let numberString = number.toString();
  for (let index = numberString.length; index >= 2; index--) {
    numberString = rotateRightmostDigits(numberString, index);
  }
  return Number(numberString);
}

console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845
