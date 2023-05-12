/*Comparación con el operador mayor o igual que --
El operador mayor o igual que ( >=) compara los valores de dos números. Si el número de la izquierda es mayor o igual que el número de la derecha, devuelve true. De lo contrario, vuelve false.

Al igual que el operador de igualdad, el operador mayor o igual que convertirá los tipos de datos durante la comparación.

Ejemplos

6   >=  6  // true
7   >= '3' // true
2   >=  3  // false
'7' >=  9  // false */

function testGreaterOrEqual(val) {
    if (val >= 20) {  // Change this line
        return "20 or Over";
    }

    if (val >=10) {  // Change this line
        return "10 or Over";
    }
    return "Less than 10";
}

testGreaterOrEqual(10);