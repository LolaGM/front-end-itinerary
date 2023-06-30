/*
The some() method tests whether some element in the array passes the test implemented by the provided function.
DEvuelve true o false y sólo comprueba el primer elemento que cumpla, si no devuelve false 

Array.prototype.some ( callbackfn [ , thisArg ] )
*/

let array = [1, 2, 3, 4, 5];

let even = function(element) {
  // checks whether an element is even
  return element % 2 === 0;
};

console.log(array.some(even));
//true

//arrow function
const array2 = [1, 2, 3, 4, 5];

// Checks whether an element is bigger than 5
const even2 = (element) => element > 5;

console.log(array2.some(even2));
// false porque ninguno cumple 

const array3 = [1, 2, 3, 4, 5];

// Checks whether an element is equal to 5
const even3 = (element) => element === 5;

console.log(array3.some(even3));
// true aunque solo sea el 5 