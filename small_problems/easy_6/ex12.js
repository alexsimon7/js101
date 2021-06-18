function isBalanced (string) {
  let parenCounter = 0;
  for (let index = 0; index < string.length; index++) {
    if (string[index] === '(') {
      parenCounter += 1;
    } else if (string[index] === ')') {
      parenCounter -= 1;
    }

    if (parenCounter < 0) {
      return false;
    }
  }

  return parenCounter === 0;
}

console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);
