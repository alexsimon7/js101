const LIMIT = 9876543202;

function isOdd (number) {
  return !(number % 2 === 0);
}

function multipleOfSeven (number) {
  return number % 7 === 0;
}

function singleDigitsOnly (number) {
  let checkArray = [];
  let numberString = number.toString();
  for (let index = 0; index < numberString.length; index++) {
    if (checkArray.includes(numberString[index])) {
      return false;
    } else {
      checkArray.push(numberString[index]);
    }
  }
  return true;
}

function featured (number) {
  let currentNumber = number;

  do {
    currentNumber += 1
  } while (!(isOdd(currentNumber) && multipleOfSeven(currentNumber)));
 
  while (currentNumber < LIMIT) {
    if (singleDigitsOnly(currentNumber)) {
      return currentNumber;
    }
    currentNumber += 14;
  }
  return 'There is no possible number that fulfills those requirements.';
}

console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(9876543186));   // 9876543201
console.log(featured(9876543200));   // 9876543201
console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."
