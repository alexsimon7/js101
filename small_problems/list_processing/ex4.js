/*
function leadingSubstrings(string) {
  let subStringArray = [];
  let stringCopy = string;
  while (stringCopy.length > 0) {
    subStringArray.push(stringCopy);
    stringCopy = stringCopy.slice(0, stringCopy.length - 1);
  }
  return subStringArray.sort((a,b) => a.length - b.length);
}
*/

function leadingSubstrings(string) {
  let subString = []
  string.split('').reduce((accum, char) => {
    subString.push(accum + char);
    return accum + char;
  }, '');

  return subString;
}

console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]
