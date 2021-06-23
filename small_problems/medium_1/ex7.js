/*
function fibonacci(number) {
  if (number === 1 | number === 2) {
    return 1;
  } else {
    return fibonacci(number - 1) + fibonacci(number -2)
  }
}
*/

function fibonacci(number) {
  let fiboNumTotal = 0;
  let round = 3;
  let pFibo = 1;
  let ppFibo = 1;
  if (number === 1 || number === 2) {
    return 1;
  } else {
    while (round <= number) {
      fiboNumTotal = ppFibo +  pFibo;
      ppFibo = pFibo;
      pFibo = fiboNumTotal;
      round += 1;
    }
  }
  return fiboNumTotal;
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

