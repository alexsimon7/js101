let arr1 = [{first: 'value1'}, {second: 'value2'}, 3, 4, 5];
let arr2 = arr1.slice();
arr2[0].first = 42;
console.log(arr1);

//The above will log '[{first: 42}, {second: 'value2'}, 3, 4, 5]'. Because
//the value changed was an object(and slice creates a shallow copy) changes
//to existing objects will change both arrays.
