let ladder = '';

['head', 'heal', 'teal', 'tell', 'tall', 'tail'].forEach(word => {
  if (ladder !== '') {
    ladder += '-'
  }

  ladder += word
})

console.log(ladder)  // expect: head-heal-teal-tell-tall-tail


/*
To fix this code, a semicolon should be inserted after the first line
to terminate that line.  Because JS performs Automatic Semicolon Insertion,
the first three lines are being parsed together causing the error.

*/
