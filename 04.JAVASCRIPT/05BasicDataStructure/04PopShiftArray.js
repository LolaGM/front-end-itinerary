let greetings = ['whats up?', 'hello', 'see ya!'];
console.log(greetings); //vemos el array compleo

greetings.pop(); //eliminamos el último
console.log(greetings);//mostramos lo que queda

greetings.shift();//eliminamos el primero
console.log(greetings); //mostramos lo que queda ['hello']

let popped = greetings.pop(); //guardamos lo eliminado en variable
console.log(popped);//mostramos por pantalla

//ejercicio
function popShift(arr) {
    let shifted = arr.shift();// Change this line
    let popped = arr.pop();; // Change this line
    return [shifted, popped]; //retorna las dos variables
}

console.log(popShift(['challenge', 'is', 'not', 'complete']));
//muestra por pantalla lo eliminado a principio y final: ['challenge', 'complete']

/*
Eliminar elementos de una matriz con pop() y shift()
Ambos push()y unshift()tienen métodos correspondientes que son casi opuestos funcionales: pop()y shift(). Como ya habrá adivinado, en lugar de agregar, pop() elimina un elemento del final de una matriz, mientras que shift()elimina un elemento del principio. La diferencia clave entre pop()y shift()y sus primos push()y unshift(), es que ninguno de los métodos toma parámetros, y cada uno solo permite que una matriz sea modificada por un solo elemento a la vez.

Vamos a ver:

let greetings = ['whats up?', 'hello', 'see ya!'];

greetings.pop();
greetingstendría el valor ['whats up?', 'hello'].

greetings.shift();
greetingstendría el valor ['hello'].

También podemos devolver el valor del elemento eliminado con cualquier método como este:

let popped = greetings.pop();
greetingstendría el valor [], y poppedtendría el valor hello.

Hemos definido una función, popShiftque toma una matriz como argumento y devuelve una nueva matriz. Modifique la función, usando pop()y shift(), para eliminar el primer y el último elemento de la matriz de argumentos, y asigne los elementos eliminados a sus variables correspondientes, de modo que la matriz devuelta contenga sus valores.


*/