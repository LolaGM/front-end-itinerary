/*omparación con el operador menor que --
El operador menor que ( <) compara los valores de dos números. Si el número de la izquierda es menor que el número de la derecha, devuelve true. De lo contrario, vuelve false. Al igual que el operador de igualdad, el operador menor que convierte los tipos de datos al comparar.
Ejemplos
2   < 5 // true
'3' < 7 // true
5   < 5 // false
3   < 2 // false
'8' < 4 // false */

function testLessThan(val) {
    if (val <25) {  // Change this line
        return "Under 25";
    }
    if (val<55) {  // Change this line
        return "Under 55";
    }  
    return "55 or Over";
}

testLessThan(10);