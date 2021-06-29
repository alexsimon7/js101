// Picks n random elements from an array,
// and returns a new array with those elements.
function random(array, n) {
  if (n === undefined) {
    n = 1;
  }

  let elements = array.slice();
  let randomElements = [];

  while (n > 0 && elements.length > 0) {
    let randomIndex = Math.floor(Math.random() * elements.length);
    let randomElement = elements[randomIndex];

    randomElements.push(randomElement);
    elements.splice(randomIndex, 1);
    n--;
  }

  return randomElements;
}

// Ingredients

let ingredients = ['rice', 'green bell pepper', 'mushrooms', 'carrot', 'kebab',
  'spinach', 'soy bean sprouts', 'mashed potatoes', 'corn', 'cucumber', 'peas'];

let spices = ['peri peri', 'cinnamon', 'nutmeg', 'cardamom', 'ground ginger',
  'poppy seed', 'cumin'];

let extras = ['peanuts', 'sesame seeds', 'egg', 'wasabi', 'soy sauce'];

// Name

let adjective  = ['Delicious', 'Hot', 'Exotic', 'Creative', 'Festive', 'Dark'];
let firstNoun  = ['Power', 'After Work', 'Holiday', 'Disco', 'Late Night'];
let secondNoun = ['Mix', 'Delight', 'Bowl', 'Chunk', 'Surprise', 'Bliss'];

// Generate!

let dishName = random(adjective).concat(random(firstNoun)).concat(random(secondNoun));
let dish = random(ingredients, 3).concat(random(spices, 2)).concat(random(extras, 1));

console.log('How about: ' + dishName.join(' '));
console.log('You need: ' + dish.join(', '));

/*
.join is an array method used to merge array elements into a string. Here, the code is attempting to
use .join on a string, which is why JS is raising the 'Type Error'. The bug occurs on line 41 and 42
when the code uses '+' to attempt to concatenate arrays. This converts the arrays to strings and adds
the arrays together. Because .join is not a string method, the code raises the 'Type Error'.

The above code has been fixed with .concat( ) which is an array method for concatenating arrays.

*/

