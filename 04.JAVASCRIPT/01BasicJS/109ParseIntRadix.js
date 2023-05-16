/*Use la función parseInt con un Radix
La parseInt()función analiza una cadena y devuelve un número entero. Toma un segundo argumento para la raíz, que especifica la base del número en la cadena (binaria, hexadecima, etc). La raíz puede ser un número entero entre 2 y 36.

La llamada a la función se parece a:

parseInt(string, radix);
Y aquí hay un ejemplo:

const a = parseInt("11", 2);
La variable radix dice que 11está en el sistema binario, o base 2. Este ejemplo convierte la cadena 11en un número entero 3.

Úselo parseInt()en la convertToIntegerfunción para que convierta un número binario en un entero y lo devuelva.
*/

function convertToInteger(str) {
    return parseInt(str, 2); // indicas a parseInt el parámetro str y la base en este caso 2 por binaria
    }

convertToInteger("10011",2);

//ahora otra función para hexadecimal
function convertToIntegerHex(str) {
    return parseInt(str, 16); // indicas a parseInt el parámetro str y la base en este caso 16 hexadecimal
    }

convertToInteger("A4FC9",16);

