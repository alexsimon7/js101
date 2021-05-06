['ant', 'bear', 'caterpillar'].pop().length;

//The value of the above statement is: 11. .pop 'pops off' the last element
//of and array and returns that element to the caller. .length is then 
//called element ('caterpillar'; a string) which had a length of 11.

//The key here is to remember that .pop acts first in removing the item
//from an array and then returns the values 'stripped' of that layer of
//the array. In the above that leaves a string.  However, in other
//instances, that could leave other primatives, an array, or an object.
