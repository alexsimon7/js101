/*
function isPalindrome(string) {
  let reverseString = '';
  for (let index = string.length - 1; index >= 0; index--) {
    reverseString += string[index];
  }
  return string === reverseString;

}


function isPalindrome(string) {
  return string === string.split('').reverse().join('');
}

*/
console.log(isPalindrome('madam'));               // true
console.log(isPalindrome('Madam'));               // false (case matters)
console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
console.log(isPalindrome('356653'));              // true
