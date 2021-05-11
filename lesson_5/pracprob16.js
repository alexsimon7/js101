let arr = [['a', 1], ['b', 'two'], ['sea', {'c': 3}], ['D', ['a', 'b', 'c']]];

let obj = {};

arr.map (index => {
  return obj[[index][0][0]] = [index][0][1];
});

console.log(obj);

/*
Newer JS provides for:

Object.fromEntries(arr);



*/
