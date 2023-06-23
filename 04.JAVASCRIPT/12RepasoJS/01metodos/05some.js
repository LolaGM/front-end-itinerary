/*
The some() method tests whether some element in the array passes the test implemented by the provided function.

Array.prototype.some ( callbackfn [ , thisArg ] )
*/

var array = [1, 2, 3, 4, 5];

var even = function(element) {
  // checks whether an element is even
  return element % 2 === 0;
};

console.log(array.some(even));
// expected output: true