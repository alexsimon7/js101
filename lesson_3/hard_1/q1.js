function first() {
  return {
    prop1: 'hi there'
  };
}

function second() {
  return
  {
    prop1: 'hi there'
  };
}

console.log(first());
console.log(second());

//No, the two functions will return different outputs: first outputs the object, and second
//returns 'undefined'. According to the solution, this occurs because semicolons in JS are
//technically optional. However, when omitted JS will add them where it thinks you need them.
//Here, JS adds a semicolon after the return in the second function.  Accordingly, the function
//returns 'undefined' and never gets to the object code.  This does not throw an error.

//In my answer, I had assumed that JS would continue to read the code until it reached the ;. As
//explained above, JS may supplement semicolons where it thinks the coder needs them.
