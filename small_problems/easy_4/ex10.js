/*
function swap(string) {
  let stringArray = string.split(' ');
  let changedArray = stringArray.slice();

  for (let index = 0; index < stringArray.length; index++) {
    changedArray[index] = changedArray[index].replace(changedArray[index][0], 
      stringArray[index].slice(-1)).slice(0, changedArray[index].length - 1).concat(stringArray[index][0]);
  }
  return changedArray.join(' ');
}
*/

function swap(string) {
  let stringArray = string.split(' ');
  let changedArray = stringArray.slice();

  changedArray = changedArray.map((element) => element.replace(element[0], 
    stringArray[stringArray.indexOf(element)].substr(-1)).slice(0, element.
    length - 1).concat(stringArray[stringArray.indexOf(element)][0]));

  return changedArray.join(' ');
}

console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"
