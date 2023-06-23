/*
The map() method creates a new array with the results of calling a provided function on every element in this array.

Array.prototype.map ( callbackfn [ , thisArg ] )

En vez de usar bucle for para recorrer el array usamos el MAP para recorrerlo y obtener resultados
*/

const myArray = [1,2,3];
const newArray = myArray.map(item => item >5);

console.log(newArray);
//(3) [false, false, false]
//los 3 elementos del array no son mayor a 5 por tanto false

const newArrayResult = myArray.map(item => item * 5);
console.log(newArrayResult);
//:1 (3) [5, 10, 15]

var array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]