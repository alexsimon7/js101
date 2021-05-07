let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

let lowestAge = undefined;

for (let age in ages) {
  if (lowestAge === undefined) {
    lowestAge = ages[age];
  } else if (ages[age] < lowestAge) {
    lowestAge = ages[age];
  }
}

console.log(lowestAge);


let agesArray = Object.values(ages);
console.log(agesArray);

let lowestAge1 = undefined;
agesArray.forEach(age => {
  if (lowestAge1 === undefined) {
  lowestAge1 = age;
  } else if (age < lowestAge1) {
    lowestAge1 = age;
  }
});

console.log(lowestAge1);
//Notes: The solution uses Math.min. Below is the problem solved via this
//method.

console.log(Math.min(...agesArray));




