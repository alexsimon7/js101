for (let i = 1; i < 100; i++) {
  if (i % 2 === 1) {
    console.log(i);
  }
}

Solution provided for the below:
for (let number = 1; number < 100; number += 2) {
  console.log(number);
}

/*
Further Exploration:

1. Different Techniques

let number = 1;
while (number < 100) {
  console.log(number);
  number += 2;
}

let number = 1;

do {
  console.log(number);
  number += 2;
} while (number < 101);

2. Adding a way for the user to specify the limit

function oddNumberSelectionLimit(integer) {
  for (let number = 1; number < integer; number += 2) {
    console.log(number);
  }
}


oddNumberSelectionLimit(7);
oddNumberSelectionLimit(100);
oddNumberSelectionLimit(45);

*/
