let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];

arr.map (index => {
  return index.filter (num => num % 3 === 0);
});

