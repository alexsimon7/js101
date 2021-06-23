let fibonacciDone = {};
function fibonacci(number) {
  if (number === 1 | number === 2) {
    return 1;
  } else if (fibonacciDone[number]) {
    return fibonacciDone[number];
  } else {
    fibonacciDone[number] = fibonacci(number - 1) + fibonacci(number -2);
    return fibonacciDone[number];
  }
}

console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(20));      // 6765
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(75));       // 2111485077978050


/*
The keys here is to put the memo outside of the function to prevent the 
memo from being reset every recursive loop. Then, switch return statements
to only calls from the memo object.  If entry in the object does not 
set that value to the object.

*/
