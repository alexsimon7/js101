function swapCase(string) {
  return string.split('').map((element) => 
    element === element.toUpperCase() ? element.toLowerCase(): 
    element.toUpperCase()).join('');
}

console.log(swapCase('CamelCase'));              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"
