const readline = require('readline-sync');

let age = Number(readline.question('What is your age? '));
let retireAge = Number(readline.question('At what age would you like to retire? '));
let yearsOfWork = retireAge - age;

let today = new Date();

let currentYear = today.getFullYear();

console.log(`It's ${currentYear}. You will retire in ${currentYear + yearsOfWork}.`);
console.log(`You have only ${yearsOfWork} years of work to go!`);


/*
Further Exploration:

The 'new' operator creates a new instance of a user-defined object type
or built in object type that has a constructor function. The Date Object
has a constructor function which (when new is used) returns a new instance of the current date and time. Trying to call Date without the 'new'
operator returns a string rather than a Date object.


*/

