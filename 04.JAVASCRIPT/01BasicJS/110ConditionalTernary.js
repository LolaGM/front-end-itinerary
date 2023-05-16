/* Utilice el operador condicional (ternario)
El operador condicional , también llamado operador ternario , se puede usar como una expresión if-else de una línea.

La sintaxis es a ? b : c, donde aes la condición, bes el código que se ejecutará cuando la condición regrese truey ces el código que se ejecutará cuando la condición regrese false.

La siguiente función usa una if/elsedeclaración para verificar una condición:

function findGreater(a, b) {
    if(a > b) {
    return "a is greater";
    }
    else {
    return "b is greater or equal";
    }
}
Esto se puede reescribir usando el operador condicional:

function findGreater(a, b) {
    return a > b ? "a is greater" : "b is greater or equal";
}
Usa el operador condicional en la checkEqual función para verificar si dos números son iguales o no. La función debe devolver la cadena Equalo la cadena Not Equal.*/

function checkEqual(a, b) { // retornar si los parámetros a y b son iguales: OJO se puede usar el estrictamente igual también ===
    return a == b ? "Equal" : "Not Equal";
    //return a === b ? "Equal" : "Not Equal";
    //retornará si a es igual a b -->si es verdad di Equal, si es falso di Not Equal
}

checkEqual(1, 2);
checkEqual(2, 1);


//otro ejemplo: dos variables con números
let a = 5;
let b = 9;
console.log(a > b ? a + 2 : b *3);
// condición a mayor que b: si es verdad se le suma 2 a variable a, si no se multiplica b *3


