let str = 'The Flintstones Rock!';

for (i = 0; i < 10; i++) {
  console.log(str.padStart(str.length + i,' '));
}

/*
According to the solution, the above can also be coded using .repeat. See
below:

let str = 'The Flintstones Rock!';

for (padding = 1; padding <= 10; padding++) {
  console.log(' '.repeat(padding) + str);
}

*/
