let str1 = 'Few things in life are as important as house training your pet dinosaur.'
let str2 = 'Fred and Wilma have a pet dinosaur named Dino.'

console.log(str1.includes('Dino'));
console.log(str2.includes('Dino'));


/*
Per the solution:

Alternate solutions include using .match which returns null when a string 
is not present. By using "!== null" comparison we can figure out which
string includes 'Dino" with a return of true.

Another alternate solution is to use .indexOf which returns the index of 
the first occurance of a specified value or -1 if not found. By creating a
boolean comparison of  .indexOf  > -1, we can determine if the substring
is present in the larger string.

*/
