/*
The every() method tests whether all elements in the array pass the test implemented by the provided function.

Array.prototype.every ( callbackfn [ , thisArg ] )

*/

function isBelowThreshold(currentValue) {
    return currentValue < 40;
  }
  
  var array1 = [1, 30, 39, 29, 10, 13];
  
  console.log(array1.every(isBelowThreshold));
  // expected output: true