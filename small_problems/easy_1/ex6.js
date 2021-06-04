const readline = require('readline-sync');

let number = readline.question('Please enter an integer greater than 0: ');

while (number <= 0) {
  number = readline.question('Invalid entry. Please enter an integer greater than 0: ');
}
number = parseInt(number);

let sumOrProduct = readline.question("Enter 's' to compute the sum, or 'p' to compute the product.");

while (sumOrProduct !== 's' && sumOrProduct !== 'p') {
  sumOrProduct = readline.question("Invalid entry. Enter 's' to compute the sum, or 'p' to compute the product.");
}


if  (sumOrProduct === 's') {
  let answer = 0;
  for (index = 1; index <= number; index++) {
    answer += index;
  }
  console.log(`The sum of the integers between 1 and ${number} is ${answer}.`);
} else {
  let answer = 1;
  for (index = 1; index <= number; index++) {
    answer *= index;
  }
  console.log(`The product of the integers between 1 and ${number} is ${answer}.`);
}


/*
Notes:

The above sum and product calculations could be extracted to seperate functions.

Per the question, if an array of integers was used, the below could be used to calculate totals:

Sum:

array.reduce((sum, value) => sum + value);

Product:

array.reduce((product, value) => product * value);

*/


