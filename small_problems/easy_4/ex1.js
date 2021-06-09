function teddysAge(min, max) {
  let low = min;
  let hi = max;
  if (min > max) {
    low = max;
    hi = min;
  }

  let age = 0;
  do {
    age = Math.ceil(Math.random() * hi);
    } while (age < low);

  console.log(`Teddy is ${age} years old!`);
}

teddysAge(20, 120);

/*
Further Exploration:

The issue with using Math.round() is that will either round up or down 
depending on which integer it is closer to providing inconsistant results.

*/
