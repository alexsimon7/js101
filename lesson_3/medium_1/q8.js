let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female' }
};

function messWithDemographics(demoObject) {
  Object.values(demoObject).forEach(familyMember => {
    familyMember['age'] += 42;
    familyMember['gender'] = 'other';
  });
}

messWithDemographics(munsters);

console.log(munsters);

//The above function alters the pre-existing values in the 'munsters' 
//object. Accordingly, 'munsters' itself will be altered. 



