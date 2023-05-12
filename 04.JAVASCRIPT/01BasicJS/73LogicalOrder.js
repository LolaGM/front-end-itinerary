/*Orden lógico en declaraciones If Else --
El orden es importante en ifsus else ifdeclaraciones.
La función se ejecuta de arriba hacia abajo, por lo que deberá tener cuidado con la declaración que aparece primero.
Tome estas dos funciones como ejemplo.

Aquí está el primero:

function foo(x) {
    if (x < 1) {
    return "Less than one";
    } else if (x < 2) {
    return "Less than two";
    }  else {
    return "Greater than or equal to two";
    }
}
Y el segundo simplemente cambia el orden de las declaraciones:

function bar(x) {
    if (x < 2) {
    return "Less than two";
    } else if (x < 1) {
    return "Less than one";
    } else {
    return "Greater than or equal to two";
    }
}

Si bien estas dos funciones parecen casi idénticas, si les pasamos un número a ambas, obtenemos resultados diferentes.

foo(0)
bar(0)
foo(0)devolverá la cadena Less than oney bar(0)devolverá la cadena Less than two. */
// se trata de ordenar el valor más bajo en la función para que empiece por ahí y no se meta en la siguiente condición.
function orderMyLogic(val) {
    if (val < 5) {
        return "Less than 5";
    } else if (val < 10) {
        return "Less than 10";
    } else {
        return "Greater than or equal to 10";
    }
}
  
orderMyLogic(7);