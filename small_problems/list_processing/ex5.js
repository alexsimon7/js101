function leadingSubstrings(string) {
  let subString = []
  string.split('').reduce((accum, char) => {
    subString.push(accum + char);
    return accum + char;
  }, '');

  return subString;
}

function substrings(string) {
  let subStrings = [];
  string.split('').map((element, index) => {
    subStrings = subStrings.concat(leadingSubstrings(string.slice(index, string.length)));
    return subStrings;
  });
  return subStrings;
}

console.log(substrings('abcde'));

// returns
[ "a", "ab", "abc", "abcd", "abcde",
  "b", "bc", "bcd", "bcde",
  "c", "cd", "cde",
  "d", "de",
  "e" ]
