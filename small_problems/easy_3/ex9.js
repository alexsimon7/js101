function cleanUp(string) {
  const alpha = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let cleanString = '';
  for (let idx = 0; idx < string.length; idx++) {
    if (alpha.includes(string[idx])) {
      cleanString += string[idx];
    } else if (alpha.includes(string[idx + 1])) {
      cleanString += ' ';
    }
  }
  return cleanString;
}

console.log(cleanUp("---what's my +*& line?"));    // " what s my line "
