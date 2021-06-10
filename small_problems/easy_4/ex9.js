function wordSizes(string) {
  let wordSizeObj = {};
  let fixedString = string.replace((/[^A-Za-z\s]/g), '');
  let wordArray = fixedString.split(' ');

  if (string === '') {
    return wordSizeObj;
  } else {
    for (let index = 0; index < wordArray.length; index++) {
      wordLength = wordArray[index].length;
      wordSizeObj[wordLength] ? wordSizeObj[wordLength] += 1: wordSizeObj[wordLength] = 1;
    }
  }
  return wordSizeObj;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2}
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3}
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "3": 1, "5": 1 }
console.log(wordSizes(''));                                            // {}
