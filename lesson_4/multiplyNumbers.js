function multiplyNumbers(numbers, multiplier) {
  let counter = 0;
  let copyNumbers = numbers.slice();

  while (counter < numbers.length) {
    copyNumbers[counter] *= multiplier;

    counter += 1;
  }
  return copyNumbers;
}

let myNumbers = [1, 4, 3, 7, 2, 6];

console.log(multiplyNumbers(myNumbers, 7));
console.log(myNumbers);


//Notes: The above can also be done by creating an empty array and pushing
//new values to that empty array.


