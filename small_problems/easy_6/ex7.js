/*

function swapName(name) {
  return name.split(' ').reverse().join(', ');
}


console.log(swapName('Joe Roberts'));    // "Roberts, Joe"

Further Exploration:

*/

function swapName(name) {
  let nameArray = name.split(' ');
  let lastName = nameArray.pop();
  return `${lastName}, ${nameArray.join(' ')}`;
}

console.log(swapName('Karl Oskar Henriksson Ragvals'));    // "Ragvals, Karl Oskar Henriksson"
