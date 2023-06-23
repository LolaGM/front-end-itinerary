/*
The reduce() method applies a function against an accumulator and each value of the array (from left-to-right) to reduce it to a single value.

Array.prototype.reduce ( callbackfn [ , initialValue ] )

*/

const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15