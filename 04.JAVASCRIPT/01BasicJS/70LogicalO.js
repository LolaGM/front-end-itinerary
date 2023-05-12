/* omparaciones con el operador lógico o --
El operador lógico o|| ( ) devuelve truesi alguno de los operandos es true. De lo contrario, vuelve false.

El operador lógico o se compone de dos símbolos de tubería: ( ||). Por lo general, esto se puede encontrar entre las teclas Retroceso y Intro.

El patrón a continuación debería parecerle familiar de los puntos de ruta anteriores.

if (num > 10) {
    return "No";
}
if (num < 5) {
    return "No";
}
return "Yes";
Este código devolverá Yessi numestá entre 5y 10( 5e 10incluido). La misma lógica se puede escribir con el operador lógico o .

if (num > 10 || num < 5) {
    return "No";
}
return "Yes";*/

function testLogicalOr(val) {
    // Only change code below this line
    if (val < 10 || val > 20) {
        return "Outside";
    }
    return "Inside";
    // Only change code above this line
}

testLogicalOr(15);