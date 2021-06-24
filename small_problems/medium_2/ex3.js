function validTriangle(angle1, angle2, angle3) {
  return ((180 - angle1 - angle2 - angle3 === 0) && (angle1 > 0 && 
    angle2 > 0 && angle3 > 0));
}

function triangleType(angle1, angle2, angle3) {
  let testTriangle = [angle1, angle2, angle3];
  if (testTriangle.includes(90)) {
    return 'right';
  } else if (testTriangle.every(element => element < 90)) {
    return 'acute';
  } else if (testTriangle.some(element => element > 90)) {
    return 'obtuse';
  }
}


function triangle(angle1, angle2, angle3) {
  if (validTriangle(angle1, angle2, angle3)) {
    return triangleType(angle1, angle2, angle3);
  }
  return 'invalid';
}

console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"
