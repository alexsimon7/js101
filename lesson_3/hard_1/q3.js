/*
function messWithVars(one, two, three) {
  one = two;
  two = three;
  three = one;
}

let one = ['one'];
let two = ['two'];
let three = ['three'];

messWithVars(one, two, three);

console.log(`one is: ${one}`);
console.log(`two is: ${two}`);
console.log(`three is: ${three}`);



The above code would log:

'one is: one'
'two is: one'
'three is: one'

This is so because of variable shadowing which blocks a inner scope variables ability to reassign the
the value of an outerscope variable of the same name. Because  'one', 'two', and 'three' have the same
names in the outer scope and in the inner  scope of the function, any attempt to reassign the variable 
values in the inner scope will not alter the variable in the outer scope. Here, because of shadowing,
the alterations to the inner scope variables do not change the outer scope variables. Accordingly,
the code logs the values originally defined in the let statements. 


function messWithVars(one, two, three) {
  one = ['two'];
  two = ['three'];
  three = ['one'];
}

let one = ['one'];
let two = ['two'];
let three = ['three'];

messWithVars(one, two, three);

console.log(`one is: ${one}`);
console.log(`two is: ${two}`);
console.log(`three is: ${three}`);


The above code would log:

'one is: one'
'two is: two'
'three is: three'

Similar to the first problem, variable shadowing prevents the above code from changing the values of the
outer scope variables 1, 2, 3. Accordingly, the outer scope variables are not changed and log the 
original let statement values to console.

*/


function messWithVars(one, two, three) {
  one.splice(0, 1, 'two');
  two.splice(0, 1, 'three');
  three.splice(0, 1,'one');
}

let one = ['one'];
let two = ['two'];
let three = ['three'];

messWithVars(one, two, three);

console.log(`one is: ${one}`);
console.log(`two is: ${two}`);
console.log(`three is: ${three}`);

/*
The above code logs:

one is: two
two is: three
three is: one

The above code also has variable shadowing between the outer scope variables one, two, three and those 
defined in the function. Unlike the prior two problems, this code calls .splice, which mutates the value
of the given array. Rather than reassigning the variable, which would only change the local variable,
.splice mutates the value that both the outer and inner variable point to. Accordingly, the console logs
those mutation values.


Overall, a key takeaway is the difference between reassignment and mutation within an inner scope and
the effect of each on the outer scope variables.  Where the inner and outer scope variables have the
same variable names(and in the case of an object point to the same value), an attempt to reassign inner 
scope variable values will not reach the outer scope variables due to variable shadowing.
Reassignement only alters the value of the innerscope variable.  This innerscope variable value change, 
or any other inner scope value for that matter, could alter an outer scope value through a method that 
mutates the value that the inner scope(and outerscope) variable points to.



*/

