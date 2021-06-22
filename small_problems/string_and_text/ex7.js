function staggeredCase(string) {
  let counter = 0;
  return string
    .split('')
    .map(element => {
      if (element.search(/[a-z]/gi) > - 1) {
        if (counter === 0) {
          counter += 1;
          return element.toUpperCase();
        } else {
          counter -= 1;
          return element.toLowerCase();
        }
      } else {
        return element;
      }
    })
    .join('');
}

console.log(staggeredCase('I Love Launch School!'));        // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase('ALL_CAPS'));                     // "AlL_CaPs"
console.log(staggeredCase('ignore 77 the 4444 numbers'));   // "IgNoRe 77 ThE 4444 nUmBeRs"
