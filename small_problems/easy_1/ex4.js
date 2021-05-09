const readline = require('readline-sync');

const SQMETER_TO_SQFEET = 10.7639;

console.log('Hello!');

console.log('Please select meters or feet:');
let unitOfMeasure = readline.prompt();

while (unitOfMeasure !== 'meters' &&  unitOfMeasure !== 'feet') {
  console.log('Please select meters or feet:');
  unitOfMeasure = readline.prompt();
}

if (unitOfMeasure === 'meters') {
  console.log('Enter the length of the room in meters:');
  let length = readline.prompt();
  length = parseInt(length, 10);

  console.log('Enter the width of the room in meters:');
  let width = readline.prompt();
  width = parseInt(width, 10);

  let areaM = length * width;
  let areaF = areaM * SQMETER_TO_SQFEET;

  console.log(`The area of the room is ${areaM.toFixed(2)} meters (${areaF.toFixed(2)} square feet).`);
} else {
  console.log('Enter the length of the room in feet:');
  let length = readline.prompt();
  length = parseInt(length, 10);

  console.log('Enter the width of the room in feet:');
  let width = readline.prompt();
  width = parseInt(width, 10);

  let areaF = length * width;
  let areaM = areaF / SQMETER_TO_SQFEET;

  console.log(`The area of the room is ${areaF.toFixed(2)} feet (${areaM.toFixed(2)} square meters).`);
}
