function reverseWords(string) {
  let stringArray = string.split(' ');
  stringArray = stringArray.map((element) => {
    if (element.length >= 5) {
      return element.split('').reverse().join('');
    } else {
      return element;
    }
  });
  return stringArray.join(' ');
}

console.log(reverseWords('Professional'));             // "lanoisseforP"
console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"
