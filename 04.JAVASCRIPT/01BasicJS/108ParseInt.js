/* Utilice la función parseInt----------------------------------------------------------------
La parseInt()función analiza una cadena y devuelve un número entero. Aquí hay un ejemplo:

const a = parseInt("007");
La función anterior convierte la cadena 007en un número entero 7. Si el primer carácter de la cadena no se puede convertir en un número, devuelve NaN (Not A Number)

Úselo parseInt()en la convertToIntegerfunción para que convierta la cadena de entrada stren un número entero y lo devuelva.*/

//convertir cadenas string que no son sumables a números sumables
let string1 = parseInt("5");
let string2 = parseInt("7");

//muestro por pantalla la suma de ambas variables ya convertidas a números que se pueden sumar
console.log(a+b); //da 12 como resultado
//////////////////////////////////////////////////
function convertToInteger(str) {
    return parseInt(str); // que devuelva un string pasado a número y le pasamos STR
}

convertToInteger("56"); // le pasamos un parámetro a la función
//mostramos por pantalla la función procesar a entero

console.log(convertToInteger("122"));