const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function signedIntegerToString(number) {

  let results  = '';
  let copyNumber = number;
  if (Math.sign(number) === -1) {
    copyNumber = number * -1;
  } 

  do {
    let remainder = copyNumber % 10;
    copyNumber = Math.floor(copyNumber / 10);

    results = DIGITS[remainder] + results;
  } while (copyNumber > 0);

  if (Math.sign(number) === -1) {
    results = '-' + results;
  } else if (Math.sign(number) === 1) {
    results = '+' + results;
  }
  return results
}

console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");
