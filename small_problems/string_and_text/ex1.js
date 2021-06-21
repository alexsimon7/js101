/*
function isUppercase(string) {
  for (let index = 0; index < string.length; index++) {
    if (string[index] !== string[index].toUpperCase()) {
      return false;
    }
  }
  return true;
}
*/

function isUppercase(string) {
  return string.toUpperCase() === string;
}

console.log(isUppercase('t'));               // false
console.log(isUppercase('T'));               // true
console.log(isUppercase('Four Score'));      // false
console.log(isUppercase('FOUR SCORE'));      // true
console.log(isUppercase('4SCORE!'));         // true
console.log(isUppercase(''));                // true
