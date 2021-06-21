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

function isPalindrome(word) {
  return word.length > 1 && word === word.split('').reverse().join('');
}

function palindromes(string) {
  return substrings(string).filter(isPalindrome);
}

/*
function isPalindrome(firstHalf, secondHalf) {
  return firstHalf === secondHalf.split('').reverse().join('');
}

function palindromes(string) {
  let substringsArray = substrings(string);
  let palindromeArray = [];
  substringsArray.forEach((element) => {
    if (element.length % 2 === 0 && element.length > 1) {
      let firstHalf = element.substring(0, element.length / 2);
      let secondHalf = element.substring(element.length / 2, element.length);
      if (isPalindrome(firstHalf, secondHalf)) {
        palindromeArray.push(element);
      }
    } else if (element.length % 2 !== 0 && element.length > 1) {
      let firstHalf = element.substring(0, (element.length - 1) / 2);
      let secondHalf = element.substring((element.length + 1) / 2, element.length);
      if (isPalindrome(firstHalf, secondHalf)) {
        palindromeArray.push(element);
      }
    }
  });
  return palindromeArray;
}
*/

console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]

console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

console.log(palindromes('knitting cassettes'));
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]



