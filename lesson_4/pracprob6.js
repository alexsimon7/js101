let arr = [1, 2, 3, 4, 5];

arr.fill(1, 1, 5);

console.log(arr);

//The above will, via .fill, fill array positions 1 through 5 with the
//number 1. Accordingly, the array will read [1, 1, 1, 1, 1]. .fill
//mutates the given array. This can be check by logging arr after running
//the .fill method.
