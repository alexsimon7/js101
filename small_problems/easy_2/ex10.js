//Using My Previous Solution:

function stringToSignedInteger(string) {
  let stringCopy = string.replace('-', '').replace('+', '');
  let digitLocation = stringCopy.length - 1;
  let stringInteger = 0;

  for (let idx = 0; idx < stringCopy.length; idx ++) {
    stringInteger += (stringCopy[idx] * (10 ** digitLocation));
    digitLocation -= 1;
  }
  if (string.includes('-')) {
    stringInteger *= -1;
  }
  return stringInteger;
}

//Using the Problem's Previous Solution:

function stringToSignedInteger(string) {
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
  let stringCopy = string.replace('-', '').replace('+', '');
  let arrayOfDigits = stringCopy.split("").map(char => DIGITS[char]);
  let value = 0;
  arrayOfDigits.forEach(digit => (value = (10 * value) + digit));
  if (string.includes('-')) {
   return value *= -1; 
  }
  return value;
}
console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true
