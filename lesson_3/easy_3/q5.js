/*
function isColorValid(color) {
  if (color === 'blue' || color === "green') {
    return true;
  } else {
    return false'
  }
}
*/

function isColorValid(color) {
  let comparison = !!(color === 'blue' || color === 'green');
  return comparison; 
} 

/*
According to solution, the above can be done without a variable as well:

function isColorValid(color) {
  return color === 'blue' || color === 'green';
}

It can also be done using .includes. See below:

function isColorValid(color) {
  return ['blue', 'green'].includes(color);

*/



