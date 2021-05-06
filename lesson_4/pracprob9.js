let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};


let ageArray = Object.values(ages);
console.log(ageArray);

let totalAge = ageArray.reduce((accumulator, currentValue) => accumulator += currentValue, 0);
console.log(totalAge);

let totalAge2 = 0; 
ageArray.forEach(number => {
  totalAge2 += number;
});
console.log(totalAge2);

let totalAge3 = 0
for (let index = 0; index < ageArray.length; index++) {
  totalAge3 += ageArray[index];
}
console.log(totalAge3);


let totalAge4 = 0;
let i = 0;

while (i < ageArray.length) {
  totalAge4 += ageArray[i];
  i += 1;
}
console.log(totalAge4);


