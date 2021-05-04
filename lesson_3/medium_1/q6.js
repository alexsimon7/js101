let nanArray = [NaN];

console.log(nanArray[0] === NaN);

//The above code will log false because NaN !== NaN.  To test whether a 
//values is NaN  we can use the Number.isNan() method or, in the
//alternative, determine whether that number equals itself.
