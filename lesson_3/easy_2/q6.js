let flintstones = ['Fred', 'Wilma', ['Barney', 'Betty'], ['Bambam', 'Pebbles']];

flintstones = [].concat(...flintstones);

console.log(flintstones);


/*
flintstones = flintstones.reduce((accum, element) => {
  return accum.concat(element);
});

let newFlintstones = [];

flintstones.forEach(element => {
  newFlintstones = newFlintstones.concat(element);
});

*/





