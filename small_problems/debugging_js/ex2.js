const RESERVED_KEYWORDS = ['break', 'case', 'catch', 'class', 'const', 'continue',
  'debugger', 'default', 'delete', 'do', 'else', 'enum', 'export', 'extends', 'finally',
  'for', 'function', 'if', 'implements', 'import', 'in', 'instanceof', 'interface',
  'let', 'new', 'package', 'private', 'protected', 'public', 'return', 'static',
  'super', 'switch', 'this', 'throw', 'try', 'typeof', 'var', 'void', 'while',
  'with', 'yield'];

function isReserved(name) {
  for (let index = 0; index < RESERVED_KEYWORDS.length; index++) {
    if (name === RESERVED_KEYWORDS[index]) {
      return true;
    }
  }

  return false;
}

console.log(isReserved('monkey')); // false
console.log(isReserved('patch'));  // false
console.log(isReserved('switch')); // should be: true


/*
The issue with the program is that the coder used a .forEach loop which does not allow for return
statements. Unlike other loops (e.g. for and while loops) or other iterative methods (e.g. .map)
.forEach returns undefined and thus ignores return statements. So, while the if statement was evaluating 
as truthy when reaching 'switch' during the .forEach iteration, the return statement was not returning 
true. The .forEach statement then finished iterating, terminated, leaving the code to return false. The
issue can be solved by changing the loop to a 'for' loop.


*/
