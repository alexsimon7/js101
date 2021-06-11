const DEGREE = '\xB0';
const MINUTES_PER_DEGREE = 60;
const SECONDS_PER_DEGREE = 60;

function padZero(number) {
  let stringNumber = String(number);
  if (stringNumber.length < 2) {
    stringNumber = '0' + stringNumber;
    return stringNumber;
  } else {
    return stringNumber;
  }
}

function dms (float) {
  let roundedFloat = (Math.round(float * 1000) / 1000);
  
  if (roundedFloat < 0) {
    roundedFloat *= -1;
  }
  let rotations = 0;
  while (roundedFloat > 360) {
    roundedFloat -= 360;
    rotations += 1;
  }

  let degrees = Math.floor(roundedFloat);
  let minutes = Math.floor(((roundedFloat - degrees) * MINUTES_PER_DEGREE));
  let seconds = Math.floor((((roundedFloat - degrees) * MINUTES_PER_DEGREE)
       - minutes) * SECONDS_PER_DEGREE);
  if (float >= 0) {
    return `${degrees}${DEGREE}${padZero(minutes)}'${padZero(seconds)}"`;
  } else {
    return `${(360 - degrees)}${DEGREE}${padZero(minutes)}'${padZero(seconds)}"`;
  }
}

console.log(dms(-1));   // 359°00'00"
console.log(dms(400));  // 40°00'00"
console.log(dms(-40));  // 320°00'00"
console.log(dms(-420)); // 60°00'00"

console.log(dms(30));           // 30°00'00"
console.log(dms(76.73));        // 76°43'48"
console.log(dms(254.6));        // 254°35'59"
console.log(dms(93.034773));    // 93°02'05"
console.log(dms(0));            // 0°00'00"
console.log(dms(360));          // 360°00'00" or 0°00'00"

