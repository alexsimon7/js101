let str1 = "Come over here!";
let str2 = "What's up, Doc?";

console.log(str1.includes('!'));
console.log(str2.includes('!'));

/*
The above answer determines whether a string includes and "!", not whether
it is the last character. The correct answer is to use .endsWith. See
below:

str1.endsWith('!');
str2.endsWith('!');


*/
