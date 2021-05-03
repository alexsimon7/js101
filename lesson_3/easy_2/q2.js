let numbers = [1, 2, 3, 4, 5];

let numbersCopy = numbers.slice().reverse();

console.log(numbersCopy);
console.log(numbers)

let numbers1 = [1, 2, 3, 4, 5];
let numbersCopy1 = [...numbers1].sort((num1, num2) => num2 - num1);

console.log(numbersCopy1)
console.log(numbers1);

let numbers2 = [1, 2, 3, 4, 5];

let numbersCopy2 = [];

numbers2.forEach(element => numbersCopy2.unshift(element));

console.log(numbersCopy2);
console.log(numbers2);



