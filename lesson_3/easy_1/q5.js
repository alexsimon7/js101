console.log(false == '0');
//The above will log 'true' because the == operator will coerce '0' to  0 
//and then compare the values. Because 0 is falsy, the code logs 'true'.

console.log(false === '0');
//The above will log 'false' because the string '0' is truthy. === is
//strict equality operation, meaning any values compared must be the same
// type and value.
