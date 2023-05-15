/*Devolver valores booleanos de funciones-----
Puede recordar de Comparación con el operador de igualdad que todos los operadores de comparación devuelven un valor booleano trueo false.

A veces, las personas usan una if/else declaración para hacer una comparación, como esta:

function isEqual(a, b) {
    if (a === b) {
        return true;
    } else {
        return false;
    }
    }
Pero hay una mejor manera de hacer esto. Como === devuelve true o false, podemos devolver el resultado de la comparación:

function isEqual(a, b) {
    return a === b;
} */

function isLess(a, b) {
    // Only change code below this line
        return a<b;    
        // Only change code above this line
    }
    
isLess(10, 15);
