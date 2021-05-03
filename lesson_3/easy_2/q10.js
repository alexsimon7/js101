let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";

console.log(statement1.split('').filter((letter) => letter === 't').length);
console.log(statement2.split('').filter((letter) => letter === 't').length);

/*
Above, the process is first to take the string and create a single array, split by letters,
via .split. Then, use .filter within that array to keep only the characters 't'. Once the
array is reduced to only 't's we measure the length of that array for the final answer using 
.length.

*/

