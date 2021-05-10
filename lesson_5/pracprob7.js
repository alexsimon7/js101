let a = 2;
let b = [5, 8];
let arr = [a,b];

// arr = [2, [5, 8]];

arr[0] += 2;
//The above would equal: [4, [5, 8]];
console.log(arr);

arr[1][0] -= a;
//The above would equal: [4, [3, 8]];
console.log(arr);

//'a' will still equal 2.
console.log(a);

//'b' will equal [3, 8].
console.log(b);
