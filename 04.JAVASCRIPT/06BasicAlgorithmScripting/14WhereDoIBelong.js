function getIndexToIns(arr, num) {
    return arr.filter(val => num > val).length;
  }

getIndexToIns([40, 60], 50);


/*

Code Explanation
Count the number of entries that are smaller than the new value num
The new value would be inserted after these values

Dónde pertenezco
Devuelve el índice más bajo en el que se debe insertar un valor (segundo argumento) en una matriz (primer argumento) una vez que se ha ordenado. El valor devuelto debe ser un número.

Por ejemplo, getIndexToIns([1,2,3,4], 1.5)debería regresar 1porque es mayor que 1(índice 0), pero menor que 2(índice 1).

Del mismo modo, getIndexToIns([20,3,5], 19)debería regresar 2porque una vez que se haya ordenado la matriz, se verá como [3,5,20]y 19es menor que 20(índice 2) y mayor que 5(índice 1).

function getIndexToIns(arr, num) {
    return num;
}

getIndexToIns([40, 60], 50);

*/