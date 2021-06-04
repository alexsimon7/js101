function multiply(num) {
  return num * num;
}

function square(num) {
  return multiply(num, num);
}

console.log(square(5) === 25); // logs true
console.log(square(-8) === 64); // logs true


/*
To generalize to a power function we could do the below:

function power(num, exp) {
  return mutiply(1, num) ** exp; 
  }
}


*/
