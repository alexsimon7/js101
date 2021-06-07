/*
My Solution:

function stringToInteger(string) {
  let digitLocation = string.length - 1;
  let stringInteger = 0;

  for (let idx = 0; idx < string.length; idx ++) {
    stringInteger += (string[idx] * (10 ** digitLocation));
    digitLocation -= 1;
  }
  return stringInteger;
}

Problem Solution:

function stringToInteger(string) {
  const DIGITS = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9
  };
  let arrayOfDigits = string.split("").map(char => DIGITS[char]);
  let value = 0;
  arrayOfDigits.forEach(digit => (value = (10 * value) + digit));
  return value;
}


console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true

Further Exploration:
*/

function hexadecimalToInteger(hexadecimal) {
  const DIGITS = {
    A: 10,
    B: 11,
    C: 12,
    D: 13,
    E: 14,
    F: 15,
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
  };
  let digitLocation = hexadecimal.length - 1;
  let hexadecimalInteger = 0;
  let arrayOfDigits = hexadecimal.toUpperCase().split('').map(char => DIGITS[char]);
  for (let index = 0; index < arrayOfDigits.length; index++) {
    hexadecimalInteger += arrayOfDigits[index] * (16 ** digitLocation);
    digitLocation -= 1;
  } 
  return hexadecimalInteger;
}


console.log(hexadecimalToInteger('4D9f'));


