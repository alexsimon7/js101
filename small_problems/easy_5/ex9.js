function dedupe(array) {
let deduped = [];
  for (let index = 0; index < vehicles.length; index++) {
    if (!(deduped.includes(vehicles[index]))) {
      deduped.push(vehicles[index]);
    }
  }
  return deduped;
}


function countOccurrences(vehicles) {
  let deduped = dedupe(vehicles);
  for (let index = 0; index < deduped.length; index++) {
    let elementAmount = vehicles.filter((element) =>  element === deduped[index]).length
    console.log(`${deduped[index]} => ${elementAmount}`);
  }
}

let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);
/*

Further Exploration:

To solve the case insensitive issue, I could add a .toLowerCase() to the dedupe function
and to the strict equality check (on the side of the element side) to bypass any issues.


console output -- your output sequence may be different
car => 4
truck => 3
SUV => 1
motorcycle => 2
*/
