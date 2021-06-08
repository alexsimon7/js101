function stringy(integer) {
  let zeroesAndOnes = '';
  while (zeroesAndOnes.length < integer)
    if (zeroesAndOnes.length % 2 === 0) {
      zeroesAndOnes += '1';
    } else {
      zeroesAndOnes += '0';
    }
  return zeroesAndOnes;
}

console.log(stringy(6));    // "101010"
console.log(stringy(9));    // "101010101"
console.log(stringy(4));    // "1010"
console.log(stringy(7));    // "1010101"


/*
The above if statment can be displayed as :

let number = ((zeroesAndOnes.length % 2) === 0) ? 1 : 0;
zeroesAndOnes += number;


*/
