let numbers = [1, 2, 3];
numbers[6] = 5;
numbers[4];


/*The above should does not return an error. It instead assigns index 
position 6 to 5 leaving previous undefined indexes as empty.

'numbers[4]' returns 'undefined', but does not have 'undefined' as its 
value. The index slot if empty.

*/
