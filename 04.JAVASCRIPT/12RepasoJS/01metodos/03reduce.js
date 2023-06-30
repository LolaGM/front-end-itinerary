/*
The reduce() method applies a function against an accumulator and each value of the array (from left-to-right) to reduce it to a single value.

reduce , toma todos los elementos en un array, y los reduce en un solo valor.
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

const array2 = [10,9,8,7,6,5,4,3,2,1];
const reducerArray2 = (sum, item) => sum * item;
const reducedArray2 = array2.reduce(reducerArray2);
console.log(reducedArray2);

const myNumbers = [1,2,3,4,5];
const finalNumber =(sum , value)=>sum + value;
console.log(myNumbers.reduce(finalNumber));
//15
console.log(myNumbers.reduce(reducerArray2));
//120
