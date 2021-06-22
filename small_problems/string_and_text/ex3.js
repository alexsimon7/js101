

function letterCaseCount(string) {
  let countReport = { lowercase: 0, uppercase: 0, neither: 0 };
  for (let index = 0; index < string.length; index++) {
    if (string[index].search(/[a-z]/gi) < 0) {
      countReport.neither += 1;
    } else {
      string[index].toUpperCase() === string[index] ? countReport.uppercase 
        += 1: countReport.lowercase += 1;
    }
  }
  return countReport;
}

console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }
