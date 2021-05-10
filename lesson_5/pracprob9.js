let arr = [['b', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green']];

arr.map(array => {
  if (Number.isInteger(array[0])) {
   return array.slice()sort((a,b) => a - b);
  } else {
   return array.slice().sort();
  }
});

/*
Notes:

'.sort()' mutates the given array, so be sure to use copies to prevent mutation of the original array.
'.sort()' by default alphabatizes string via UTF-16 code unit values and thus does not need a compare
  function. This will work on single character strings as well as multiple character strings.
Return statements are needed for .map when the function is broken down between brackets {} onto multiple
  lines.
'.map' is a great method for returning arrays with the same nesting.

*/
