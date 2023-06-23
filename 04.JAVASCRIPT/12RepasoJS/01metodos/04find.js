/*
The find() method returns a value of the first element in the array that satisfies the provided testing function. Otherwise undefined is returned.

arr.find(callback[, thisArg])

*/

var array1 = [5, 12, 8, 130, 44];

var found = array1.find(function(element) {
    return element > 10;
});

console.log(found);
// expected output: 12
//12 es el primero que cumple ser mayor pero no el único