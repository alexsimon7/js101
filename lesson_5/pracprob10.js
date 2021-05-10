let arr = [['b', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green']];

arr.map(array => {
  if (Number.isInteger(array[0])) {
   return array.slice().sort((a,b) => b - a);
  } else {
   return array.slice().sort().reverse();
  }
});

/*
Notes: The solution does not use '.reverse'.  See below

...

if (a < b) {
  return 1;
} else if (a > b) {
  return -1;
} else {
  return 0;
}

*/
