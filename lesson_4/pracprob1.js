[1, 2, 3].filter(num => 'hi');

//The above returns [1, 2, 3] because the callback (a string which is 
//truthy) returns truthy. Thus, every element is selected for the new array.
