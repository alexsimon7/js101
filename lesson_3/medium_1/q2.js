let munstersDescription = "The Munsters are creepy and spooky.";

let munstersDescriptionArray = munstersDescription.split('');

for (letter =  0; letter < munstersDescription.length; letter++) {
  if (munstersDescriptionArray[letter] === munstersDescriptionArray[letter].toUpperCase()) {
    munstersDescriptionArray[letter] = munstersDescriptionArray[letter].toLowerCase();
  } else {
    munstersDescriptionArray[letter] = munstersDescriptionArray[letter].toUpperCase();
  }
}

let munstersDescriptionSwapped =  munstersDescriptionArray.join('');

/*
Per the solution, the above logic can be used in a .map function. See the
answer below:


munstersDescription.split('').map(function(char) {
  if (char === char.toUpperCase()) {
    return char.toLowerCase();
  } else {
    return char.toUpperCase();
  }
}).join('');

*/

