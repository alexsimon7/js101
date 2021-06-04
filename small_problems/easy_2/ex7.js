function xor (obj1, obj2) {
  if ((obj1 && !obj2) || (!obj1 && obj2)) {
    return true;
  }
  return false;
}

console.log(xor(5, 0) === true);
console.log(xor(false, true) === true);
console.log(xor(1, 1) === false);
console.log(xor(true, true) === false);


/*
A shortened version of the above would look like:

function xor (obj1, obj2) {
  return !!((obj1 && !obj2) || (!obj1 && obj2));
}

Further Exploration:

The xor function does perform short circuit evaluation both with the && 
and the || operators. At the && level, the xor function first asks
whether obj1 is truthy and if not, ignores whether obj2 is falsey. It then
does the opposite, asking whether obj1 is falsey ignoring obj2 if not. At
the || level, the xor function checks whether '(obj1 && !obj2)' or 
'(obj1 && obj2)' is truthy returning true if either is truthy and false
otherwise.  At this level, if the first part of the expression is true,
the second part is ignored. 



*/
