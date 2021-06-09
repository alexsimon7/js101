/*
function century(year) {
  let centuryLength = year.toString().length;
  console.log(`centuryLength is ${centuryLength}`);
  let centuryNum = Math.ceil(year + 99);
  centuryNum /= (10 ** (centuryLength - 2));
  return centuryNum;
} 

*/
function century(year) {
  let centuryNum = Math.ceil(year + 99);
  let centuryString = centuryNum.toString();
  if (centuryString.length >= 4) {
    centuryString = centuryString.slice(0, -2);
  } else {
    centuryString = centuryString.slice(0, 1);
  }
  
  if (centuryString.slice(-2) === '11' || centuryString.slice(-2) ===
      '12' || centuryString.slice(-2) === '13') {
    return centuryString + 'th';
  } else {
    let appendNum = centuryString.slice(-1);

    switch(appendNum) {
      case '1':
        return centuryString + 'st';
      case '2':
        return centuryString + 'nd';
      case '3':
        return centuryString + 'rd';
      default:
        return centuryString + 'th';
    }
  }
}




console.log(century(2000));        // "20th"
console.log(century(2001));        // "21st"
console.log(century(1965));        // "20th"
console.log(century(256));         // "3rd"
console.log(century(5));           // "1st"
console.log(century(10103));       // "102nd"
console.log(century(1052));        // "11th"
console.log(century(1127));        // "12th"
console.log(century(11201));       // "113th"
