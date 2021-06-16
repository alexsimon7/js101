function doubleConsonants(string) {
  const cons = 'bcdfghjklmnpqrstvwxyz';
  let stringArray = string.split('');
  for (let index = 0; index < stringArray.length; index++) {
    if (cons.includes(stringArray[index].toLowerCase())) {
      stringArray[index] += stringArray[index];
    }
  };
  return stringArray.join('');
}

console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // ""
