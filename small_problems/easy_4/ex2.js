const readline = require('readline-sync');

function isIncluded(arr, val) {
  return arr.some((element) => element < val);
}

let numGroup = [];

let first = Number(readline.question("Enter the 1st number: "));
numGroup.push(first);
let second = Number(readline.question("Enter the 2nd number: "));
numGroup.push(second);
let third = Number(readline.question("Enter the 3rd number: "));
numGroup.push(third);
let fourth = Number(readline.question("Enter the 4th number: "));
numGroup.push(fourth);
let fifth = Number(readline.question("Enter the 5th number: "));
numGroup.push(fifth);

let last  = Number(readline.question("Enter the last number: "));

if (isIncluded(numGroup, last)) {
  console.log(`A number appears in ${numGroup.toString()} which is less than ${last}.`);
} else {
  console.log(`A number does not appear in ${numGroup.toString()} which is less than ${last}.`);
}


