/*
function digitList (integer) {
  let array = [];
  let intString = integer.toString();
  for (let index = 0; index < intString.length; index++) {
    array.push(+intString[index]);
  }
  return array;
}
*/

function digitList (integer) {
  let numberStringArray = String(integer).split('');
  return numberStringArray.map((current) => +current);
}


console.log(digitList(12345));       // [1, 2, 3, 4, 5]
console.log(digitList(7));           // [7]
console.log(digitList(375290));      // [3, 7, 5, 2, 9, 0]
console.log(digitList(444));         // [4, 4, 4]
