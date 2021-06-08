function triangle(number) {
  for (let idx = number - 1; idx >= 0; idx--) {
    console.log(' '.repeat(idx).padEnd(number, '*'));
  }
}

triangle(5)
triangle(9)
