
/*
function factors(number) {
  let divisor = number;
  let factors = [];
  do {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
    divisor -=1;
  } while (divisor !== 0);
  return factors;
}
*/

function factors(number) {
  let divisor = number;
  let factors = [];
  while (divisor > 0) {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
    divisor -= 1;
  }
  return factors;
}

//The purpose of 'number % divisor === 0' is to find factors of a given
//number. % will return a number(other than 0) for any number that doesn't 
//equally divide into said number. 
