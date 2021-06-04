/*

function penultimate(string) {
  let arr = string.split(' ');
  return arr[arr.length - 2];
}

console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true

*/


function middleWord(string) {
//if string empty, return empty string
  if (string.length === 0) {
    return 'Empty string.';
//if string length is even, return no middle
  } else if (string.length % 2 === 0) {
    return'No middle word.';
  } else {
//return middle word
    let arr = string.split(' ');
    return arr[Math.floor(arr.length / 2)];
  }
}

console.log(middleWord(''));
console.log(middleWord('one'));
console.log(middleWord('one two three four'));
console.log(middleWord('one two three'));

