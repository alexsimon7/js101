function star(oddNum) {
  let startingSpaces = (oddNum - 3) / 2;

  let startingPad = oddNum;
  for (let index = startingSpaces; index >= 0; index--) {
    let lineDisplay = `*${' '.repeat(index)}*${' '.repeat(index)}*`;
    console.log(lineDisplay.padStart(startingPad, ' '));
    startingPad -= 1;
  }

  console.log('*'.repeat(oddNum));

  startingPad = startingSpaces + 3;
  for (let index = 0; index <= startingSpaces; index++) {
    let lineDisplay = `*${' '.repeat(index)}*${' '.repeat(index)}*`;
    console.log(lineDisplay.padStart(startingPad, ' '));
    startingPad += 1;
  }
}

star(7);
star(9);

