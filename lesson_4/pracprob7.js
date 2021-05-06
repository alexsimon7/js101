['ant', 'bear'].map(elem => {
  if (elem.length > 3) {
    return elem; 
  }
});

//The above returns: ['undefined', 'bear']. The .map method looks at the
//callback and returns the result of the function. Where there is no return
//.map returns undefined. An array run through .map returns the same length
//array as inputed.  Here, upon running 'ant' throught the callback, the
//method does not reach the return statement. Thus, index 0 returns
//undefined. Upon running index 1, the if statement is satisfied and the
//element itself is returned after reaching the return statement.
