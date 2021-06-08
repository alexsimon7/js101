function findFibonacciIndexByLength(digits) {
  let fibostart = 1n;
  let fibonum = 1n;
  let count = 2n;
  while (fibonum.toString().length < digits) {
    let fibotemp = fibonum;
    fibonum += fibostart;
    fibostart = fibotemp;
    count += 1n;
  }
  return count;
}

console.log(findFibonacciIndexByLength(2n) === 7n);    // 1 1 2 3 5 8 13
console.log(findFibonacciIndexByLength(3n) === 12n);   // 1 1 2 3 5 8 13 21 34 55 89 144
console.log(findFibonacciIndexByLength(10n) === 45n);
console.log(findFibonacciIndexByLength(16n) === 74n);
console.log(findFibonacciIndexByLength(100n) === 476n);
console.log(findFibonacciIndexByLength(1000n) === 4782n);
console.log(findFibonacciIndexByLength(10000n) === 47847n);

// The last example may take a minute or so to run.
