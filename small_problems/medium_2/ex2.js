function triangle (side1, side2, side3) {
  let potentialTriangle = [side1, side2, side3];
  potentialTriangle = potentialTriangle.sort((a, b) =>  a - b);

  if (potentialTriangle[0] === 0 || potentialTriangle[1] === 0 || 
    potentialTriangle[2] === 0) {
    return 'invalid';
  } else if (potentialTriangle[0] + potentialTriangle[1] 
      < potentialTriangle[2]) {
    return 'invalid';
  } else if ((potentialTriangle[0] === potentialTriangle[1] &&
    potentialTriangle[1] === potentialTriangle[2])) {
    return 'equilateral';
  } else if (potentialTriangle[0] === potentialTriangle[1] || 
    potentialTriangle[1] === potentialTriangle[2] ||
    potentialTriangle[2] === potentialTriangle[0]) {
    return 'isosceles';
  } else {
    return 'scalene';
  }
}

console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"
