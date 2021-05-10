let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

arr.forEach (subArray => {
  let subArrayTotal = 0;
  let subArrayLength = subArray.length;
  subArray.forEach (num => {
    if (num % 2 === 1) {
      subArrayTotal += num;
    }
  subArray[subArrayLength] = subArrayTotal;
  });
});

arr.sort((a,b) => a[3] - b[3]);

arr.forEach (subArray => {
  subArray.length = 3;
});

console.log(arr);

/*
Solution provides the below:

arr.sort((a,b) => {
  let oddSumA = a.filter(num => num % 2 === 1)
                 .reduce((sum, next) => sum + next);
  let oddSumB = b.filter(num => num % 2 === 1)
                 .reduce((sum, next) => sum + next);

  return oddSumA - oddSumB;
});

Notes: As opposed to my method which was longer and required altering of the arrays back and forth, the 
more pragmatic method is to use '.sort' straight away. The function following sort can be used to deliniate
the sorting parameters without altering the original array values. Stated another way, the .sort method
creates values for sorting within its confines while preserving the original values. It, of course, sorts
the intended values within the array.


*/
