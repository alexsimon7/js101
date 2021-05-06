[1, 2, 3].every(num => {
  return num = num * 2;
});

//The above returns: true.  It does so because the .every method looks at
//the callback and determines the truthiness of each element.  If all of
//the elements return truthy, then the method returns true.  Here, each
//element when run through the callback returns a number, which is truthy.
//Accordingly, the method returns true.
