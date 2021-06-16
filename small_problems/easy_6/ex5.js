function negative(number) {
 return number >= 0 ? number *= -1: number;
}

console.log(negative(5));     // -5
console.log(negative(-3));    // -3
console.log(negative(0));     // -0


/* 
Notes: Can also use Math.abs() to solve this problem.

To differentiate between 0 and -0, one can divide 1 by either. 0 returns infinity while -0 
returns negative infinity (-infinity).


*/
