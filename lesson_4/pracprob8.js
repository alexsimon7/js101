let flintstones = ['Fred', 'Barney', 'Wilma', 'Betty', 'Pebbles', 'Bambam'];

let flintstonesObject = {};

for (let index = 0; index < flintstones.length; index++) {
  flintstonesObject[flintstones[index]] = index;
} 

console.log(flintstonesObject);


let flintstonesObject2 = {};
let index2 = 0;

while (index2 < flintstones.length) {
  flintstonesObject2[flintstones[index2]] = index2;
  index2 += 1;
}

console.log(flintstonesObject2);


let flintstonesObject3 = {};

flintstones.forEach((name, idx) => {
  flintstonesObject3[name] = idx;
});

console.log(flintstonesObject3);


