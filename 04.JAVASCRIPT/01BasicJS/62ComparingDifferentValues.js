/* Si los valores que se comparan no son del mismo tipo, el operador de igualdad realizará una conversión de tipo y luego evaluará los valores. Sin embargo, el operador de igualdad estricta comparará tanto el tipo de datos como el valor tal cual, sin convertir un tipo en otro.
Ejemplos
3 == '3'devuelve trueporque JavaScript realiza la conversión de tipo de cadena a número. 3 === '3'devuelve falseporque los tipos son diferentes y no se realiza la conversión de tipo.

Nota: en JavaScript, puede determinar el tipo de una variable o un valor con el typeofoperador, de la siguiente manera:

typeof 3
typeof '3'
typeof 3devuelve la cadena numbery typeof '3'devuelve la cadena string.
*/

// Setup
function compareEquality(a, b) {
    if (a === b) { // Change this line
        return "Equal";
    }
    return "Not Equal";
}

compareEquality(10, "10");
console.log(compareEquality(10, "10"));
