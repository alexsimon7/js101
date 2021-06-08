/*
function logInBox(string) {
  let stringLength = string.length;
  let spaces = '';
  let dashes = '';
  console.log(`+-${dashes.padEnd(stringLength, '-')}-+`);
  console.log(`| ${spaces.padEnd(stringLength)} |`);
  console.log(`| ${string} |`);
  console.log(`| ${spaces.padEnd(stringLength)} |`);
  console.log(`+-${dashes.padEnd(stringLength, '-')}-+`);
}

Further Exploration:
*/

function logInBox(string, width = string.length) {
  
  let truncString = string.slice(0, width);
  let counter = width;

  let horLine = `+-${'-'.repeat(truncString.length)}-+`
  let emptyLine = `| ${' '.repeat(truncString.length)} |`

  console.log(horLine);
  console.log(emptyLine);
  console.log(`| ${truncString} |`);
  while (counter <= string.length  && counter !== 0) {
    if (string.slice(counter, counter + width).length === width) {
      console.log(`| ${string.slice(counter, counter + width)} |`);
      counter += width;
    } else {
      console.log(`| ${string.slice(counter, counter + 
        width)}${' '.repeat(width - string.slice(counter, counter + 
        width).length)} |`);
      counter += width;
    }
  } 
  console.log(emptyLine);
  console.log(horLine);
}


console.log(logInBox('To boldly go where no one has gone before.'));
console.log(logInBox('To boldly go where no one has gone before.', 20));
console.log(logInBox(''));
