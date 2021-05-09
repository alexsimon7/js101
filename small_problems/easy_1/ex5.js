const readline = require('readline-sync');


console.log("Welcome to the Tip Calculator!");

let bill = readline.question('What is the bill? ');
bill = parseFloat(bill, 10);

let tipPercentage = readline.question('What is the tip percentage? ');
tipPercentage = parseFloat(tipPercentage, 10);

let tip = bill * (tipPercentage / 100);
let total = bill + tip;

console.log(`The tip is $${tip.toFixed(2)}`);
console.log(`The total is $${total.toFixed(2)}`);

