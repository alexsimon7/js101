let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};

for (let member in munsters) {
  console.log(`${member} is a ${munsters[member].age}-year-old ${munsters[member].gender}.`);
}

/*
Note: Can also do the above with a forEach loop.

Object.entries(munsters).forEach(entry => {
  let name = entry[0];
  let age = entry[1].age;
  let gender = entry[1].gener;

  console.log(`${name} is a ${age}-year-old ${gender}.`);
});


*/
