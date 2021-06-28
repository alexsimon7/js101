function isBlockWord(string) {
  const BLOCKS = [ ['B','O'], ['X', 'K'], ['D', 'Q'], ['C', 'P'], ['N', 'A'],
    ['G', 'T'], ['R', 'E'], ['F', 'S'], ['J', 'W'], ['H', 'U'], ['V', 'I'],
    [ 'L', 'Y'], ['Z', 'M']];

  let usedBlocks = [];

  for (let index = 0; index < string.length; index++) {
    if (usedBlocks.includes(string[index].toUpperCase())) {
      return false;
    } else {
      for (let subIndex = 0; subIndex < BLOCKS.length; subIndex++) {
        if (BLOCKS[subIndex].includes(string[index].toUpperCase())) {
          usedBlocks.push(BLOCKS[subIndex][0], BLOCKS[subIndex][1]);
          break;
        }
      }
    }
  }
  return true;
}

console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true
console.log(isBlockWord('APPLE'));      // false
console.log(isBlockWord('apple'));      // false
console.log(isBlockWord('apPLE'));      // false
console.log(isBlockWord('Box'));        // false
