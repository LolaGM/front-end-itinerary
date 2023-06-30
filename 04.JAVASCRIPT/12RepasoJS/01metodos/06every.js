/*
The every() method tests whether all elements in the array pass the test implemented by the provided function.

Devuelve true si TODOS los elementos cumplen la condicion
Devuelve false si alguno no cumple la condicion

Array.prototype.every ( callbackfn [ , thisArg ] )

*/

let array1 = [1, 30, 39, 29, 10, 13];
function isBelowThreshold(currentValue) {
    return currentValue < 40;
  } 
console.log(array1.every(isBelowThreshold));
// expected output: true porque todos pasan el test


let arrayDecimals = [10,20, 30, 40, 50];
let underFifty = (element) => element < 50;
console.log(arrayDecimals.every(underFifty));
//false porque hay un elemento que no cumple así que rompe el true de todos y acaba siendo false

let arrayDecimals2 = [10,20, 30, 40, 50];
let underSixty = (element) => element < 60;
console.log(arrayDecimals2.every(underSixty));
//true porque TODOS los elementos cumplen la condición