function lightsOn(switches) {
  let lightSwitches = [];
  for (let index = 0; index < switches; index++) {
    lightSwitches[index] = 'off';
  }

  let count = 1;
  while (count <= switches) {
    for (let index = count - 1; index < lightSwitches.length; index += count) {
      lightSwitches[index] === 'off' ? lightSwitches[index] = 'on': 
        lightSwitches[index] = 'off';
    }
    count += 1;
  }
  return lightSwitches.map((element, index) => {
    return element === 'on' ? element = index + 1: element;
  }).filter(element => Number.isInteger(element));
}

console.log(lightsOn(5));        // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

console.log(lightsOn(100));      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
