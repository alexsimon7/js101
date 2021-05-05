let object = { first: [1] };
let numArray = object['first'];
numArray.push(2);

console.log(numArray); // => '[1, 2]'
console.log(object);


//The above outputs { first: [1, 2] } because numArray references the original array.  Accordingly
//when numArray is changed through .push (which mutates the original array), object is also changed.

