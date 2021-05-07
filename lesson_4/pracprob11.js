let statement = 'The Flintstones Rock';

let statementArray = statement.replaceAll(' ', '').split('');

let frequencyFlintstones = {};

statementArray.forEach(letter => {
  if (frequencyFlintstones[letter] === undefined) {
    let length = statementArray.filter(letters => letter === letters).length;
    frequencyFlintstones[letter] = length;
  }
});

console.log(frequencyFlintstones);

