function displayLine(oddNum, lineDisplay) {
  let pad = (oddNum - lineDisplay.length) / 2;
  if (lineDisplay.length > 1) {
    lineDisplay =`*${' '.repeat(lineDisplay.length - 2)}*`
  } 
  console.log(lineDisplay.padStart(pad + lineDisplay.length, ' '));
}

function diamond(oddNum) {
  let lineDisplay =  '*';

  while (lineDisplay.length <= oddNum) {
    displayLine(oddNum, lineDisplay);
    lineDisplay += '**';
  }

  while (lineDisplay.length > 0) {
    if (oddNum === 1) break;
    lineDisplay = lineDisplay.length >= oddNum ? lineDisplay.slice(0,
      lineDisplay.length  - 4) : lineDisplay.slice(0, lineDisplay.length - 2);
    displayLine(oddNum, lineDisplay);
  }
}

diamond(1);
diamond(3);
diamond(9);
