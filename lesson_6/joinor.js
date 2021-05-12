function joinOr (array, seperators = ', ', joinWord = 'or') {
  if (array.length <= 1) {
    return array.join();
  } else if (array.length === 2) {
    return array.join(` ${[joinWord]} `);
  } else {
    let copyArray = array.slice();
    let lastElement = copyArray.pop();
    lastElement = joinWord.concat(' ', lastElement);
    copyArray.push(lastElement);
    return copyArray.join(`${seperators}`);
  }
}

console.log(joinOr([1, 2, 3]));
console.log(joinOr([1, 2, 3], '; '));
console.log(joinOr([1, 2, 3], ', ', 'and'));
console.log(joinOr([]));
console.log(joinOr([5]));
console.log(joinOr([1, 2]));
console.log('');
