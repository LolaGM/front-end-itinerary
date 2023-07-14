/*
The find() method returns a value of the first element in the array that satisfies the provided testing function. Otherwise undefined is returned.

arr.find(callback[, thisArg])

solo retorna el primero que cumple pero puede haber más

*/

let array1 = [5, 12, 8, 130, 44];

let found = array1.find(function(element) {
    return element > 10;
});

console.log(found);
// expected output: 12
//12 es el primero que cumple ser mayor pero no el único

let arrayNumber = [11,12,13,14,15,16,17,18];

let foundNumber = arrayNumber.find(element => element > 10);
console.log(foundNumber);
// 11 es el primero que cumple ser mayor pero no el único


const array2 = ['Lola','Ana', 'Ana', 'Lol'];
const found2 = array2.find(element => element === 'Ana');

console.log(found2);
// Ana hay dos pero solo coge a la primera