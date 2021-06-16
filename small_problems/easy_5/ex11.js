const HOURS_PER_DAY = 24;
const MINUTES_PER_HOUR = 60;
const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;

function afterMidnight(time) {
  let timeNumber = time.split(':');
  if ((+timeNumber[0] === 0 || +timeNumber[0] === HOURS_PER_DAY) && +timeNumber[1] === 0) {
    return 0;
  } else {
    return (timeNumber[0] * MINUTES_PER_HOUR) + (+timeNumber[1]);
  }
}


function beforeMidnight(time) {
  let answer = MINUTES_PER_DAY - afterMidnight(time);
  if (answer === MINUTES_PER_DAY) {
    answer = 0;
  }
  return answer;
  /*let timeNumber = time.split(':');
  if ((+timeNumber[0] === 0 || +timeNumber[0] === HOURS_PER_DAY) && +timeNumber[1] === 0) {
    return 0;
  } else {
    return MINUTES_PER_DAY - ((timeNumber[0] * MINUTES_PER_HOUR) + (+timeNumber[1]));
  }*/
}

console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);


