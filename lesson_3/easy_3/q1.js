let numbers = [1, 2, 3, 4];

/*

#1
numbers.length = 0;
console.log(numbers);

#2

numbers.splice(0);
console.log(numbers);

#3

copyNumbers = numbers.slice()
console.log(copyNumbers);
 
copyNumbers.forEach(element => numbers.shift());
console.log(numbers);

The above uses a copy of numbers to iterate over it and delete each entry
thus preventing any issues that come from editing an array while iterating
over it.


Solution provided the answer below:

while(numbers.length) {
  numbers.pop();
}


*/
