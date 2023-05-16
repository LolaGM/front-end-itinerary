/* Usar múltiples operadores condicionales (ternarios)------
En el desafío anterior, utilizó un solo operador condicional. También puede encadenarlos para verificar múltiples condiciones.

La siguiente función usa declaraciones if, else if y else para verificar varias condiciones:

function findGreaterOrEqual(a, b) {
    if (a === b) {
        return "a and b are equal";
    }
    else if (a > b) {
        return "a is greater";
    }
    else {
        return "b is greater";
    }
}
La función anterior se puede reescribir usando múltiples operadores condicionales:

function findGreaterOrEqual(a, b) {
    return (a === b) ? "a and b are equal" 
        : (a > b) ? "a is greater" 
        : "b is greater";
}
Se considera una buena práctica formatear múltiples operadores condicionales de modo que cada condición esté en una línea separada, como se muestra arriba. El uso de varios operadores condicionales sin la sangría adecuada puede dificultar la lectura del código. Por ejemplo:

function findGreaterOrEqual(a, b) {
    return (a === b) ? "a and b are equal" : (a > b) ? "a is greater" : "b is greater";
}
En la checkSignfunción, use múltiples operadores condicionales, siguiendo el formato recomendado utilizado en findGreaterOrEqual, para verificar si un número es positivo, negativo o cero. La función debería devolver positive, negative o zero.*/
function checkSign(num) { // creamos función
    return  (num === 0) ? "zero" // si num es estrictamente igual a cero
    : (num > 0) ? "positive" // si es mayor que cero es positivo
    : "negative"; //si no lo es, es negativo
}
//se retornará correctamente
checkSign(10);
checkSign(-1);

//ahora mostramos por pantalla la llamada a la función con diferentes parámetros
console.log(checkSign(0));
console.log(checkSign(5));
console.log(checkSign(-1));