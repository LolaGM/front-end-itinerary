/*Comparación con el Operador de Desigualdad --
El operador de desigualdad ( !=) es lo opuesto al operador de igualdad. Significa no igual y vuelve falsedonde volvería la igualdad truey viceversa . Al igual que el operador de igualdad, el operador de desigualdad convertirá tipos de datos de valores al comparar.

Ejemplos

1 !=  2    // true
1 != "1"   // false
1 != '1'   // false
1 != true  // false
0 != false // false
*/

// Setup
function testNotEqual(val) {
    if (val !=99) { // Change this line
        return "Not Equal";
    }
    return "Equal";
}

testNotEqual(10);