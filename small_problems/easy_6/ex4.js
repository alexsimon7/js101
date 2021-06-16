function centerOf(string) {
  let stringLength = string.length;
  return stringLength % 2 === 0 ? string.slice((stringLength / 2 - 1), (stringLength / 2 + 1)):
    string.slice((stringLength / 2), stringLength / 2 + 1);
}

console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"
