/* function range(end, start = 0) {
  let range = [];

  for (let element = start; element <= end; element++) {
    range.push(element);
  }

  return range;
}

//function range(end) {
//  return range(0, end);
//}

// Examples

console.log(range(20, 10));
console.log(range(5));

*/

/*
The above code has several errors. First, defining two functions with the same name (range) is bad
practice. Here, the second range function is the operative range function because it is defined last.
This means, the first one is ignored. Second, the second range function is causing the stack error 
because the second range function is recursivly calling itself without code to stop the recursion when 
it reaches a defined point. To fix the program, the second range function should be entirely removed, 
the function parameters should be reversed (end, start) setting the second parameter with a default of 0.
Lastly, the arguments invoked on line 17 need to be reversed.

Solution:

Instead of reversing the function parameters, the solution uses the below:

function range(start, end = -1) {

  if(end === -1) {
    end = start;
    start = 0;
  }

...
}

When no second argument is provided, the second parameter of the function defaults to -1. This sets 
the value of end to the single value provided and sets start to 0.

Further Exploration:

Part 1:
The code doesn't work for two reasons:

1. The problem with if (!end) is that it will be executed when the parameter end is set as 0. This
returns an array of [0, 1, 2, 3, 4, 5] when it should return [].

2. The code changes start to 0 before setting the value of end to start. As written, both value will
always be 0.


*/
function range(start, end) {
  if (!end) {
    end = start;
    start = 0;
  }

  let range = [];

  for (let element = start; element <= end; element++) {
    range.push(element);
  }

  return range;
}

// Examples

console.log(range(10, 20));
console.log(range(5, 0));
