function checkScope() {
    let i = "function scope"; //declaramos dentro de la función con LET la variable i con el valor
    if (true) {// si es verdad cambiamos el valor de i a block
      let i = "block scope";
      console.log("Block scope i is: ", i);
    }//si no lo es que diga por consola que su valor es sólo dentro de la función
    console.log("Function scope i is: ", i);
    return i; //devuelve el valor de i dentro de esta función
}

console.log(i); //da error NOT DEFINED porque no está definida LET fuera de la función

/////////////////////


/* Compare los alcances de la var y deje las palabras clave
Si no está familiarizado con let, consulte este desafío sobre la diferencia entre let y var .

Cuando declara una variable con la var palabra clave, se declara globalmente o localmente si se declara dentro de una función.

La letpalabra clave se comporta de manera similar, pero con algunas características adicionales. Cuando declara una variable con la letpalabra clave dentro de un bloque, declaración o expresión, su alcance se limita a ese bloque, declaración o expresión.

Por ejemplo:

var numArray = [];
for (var i = 0; i < 3; i++) {
    numArray.push(i);
}
console.log(numArray);
console.log(i);
Aquí la consola mostrará los valores [0, 1, 2]y 3.

Con la varpalabra clave, ise declara globalmente. Entonces, cuando i++se ejecuta, actualiza la variable global. Este código es similar al siguiente:

var numArray = [];
var i;
for (i = 0; i < 3; i++) {
    numArray.push(i);
}
console.log(numArray);
console.log(i);
Aquí la consola mostrará los valores [0, 1, 2]y 3.

Este comportamiento causará problemas si tuviera que crear una función y almacenarla para su uso posterior dentro de un forciclo que usa la ivariable. Esto se debe a que la función almacenada siempre se referirá al valor de la ivariable global actualizada.

var printNumTwo;
for (var i = 0; i < 3; i++) {
    if (i === 2) {
        printNumTwo = function() {
        return i;
        };
    }
}
console.log(printNumTwo());
Aquí la consola mostrará el valor 3.

Como puede ver, printNumTwo()imprime 3 y no 2. Esto se debe a que el valor asignado a ise actualizó y printNumTwo()devuelve el valor global iy no el que itenía cuando se creó la función en el bucle for. La letpalabra clave no sigue este comportamiento:

let printNumTwo;
for (let i = 0; i < 3; i++) {
    if (i === 2) {
        printNumTwo = function() {
        return i;
        };
    }
}
console.log(printNumTwo());
console.log(i);
Aquí la consola mostrará el valor 2y un error que i is not defined.

ino está definido porque no se declaró en el ámbito global. Solo se declara dentro de la fordeclaración de bucle. printNumTwo()devolvió el valor correcto porque la palabra clave dentro de la declaración de bucle icreó tres variables diferentes con valores únicos (0, 1 y 2) .let

Corrija el código para que ilo declarado en la ifdeclaración sea una variable separada de la ideclarada en la primera línea de la función. Asegúrese de no usar la varpalabra clave en ninguna parte de su código.

Este ejercicio está diseñado para ilustrar la diferencia entre cómo vary letlas palabras clave asignan alcance a la variable declarada. Al programar una función similar a la utilizada en este ejercicio, a menudo es mejor usar diferentes nombres de variables para evitar confusiones. */