const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 
      'July', 'August', 'September', 'October', 'November', 'December'];
function fridayThe13ths(year) {
  let count = 0;
  for (let index = 0; index < MONTHS.length; index++) {
    let dayof13th = new Date(`${MONTHS[index]} 13, ${year}`);
    if (dayof13th.getDay() === 5) {
      count += 1;
    }
  }
  return count;
}

console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2
