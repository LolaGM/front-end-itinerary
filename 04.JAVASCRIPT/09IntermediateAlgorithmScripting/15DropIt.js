function dropElements(arr, func) { //le pasamos matriz arr y la function func
    while (!func(arr[0])) { //mientras que funcion no le pase el array con indice cero 
    arr.shift(); //retorna arr con el primer elemento eliminado
    }
    return arr; //si no retorna arr 
}

dropElements([1, 2, 3], function(n) {return n < 3; });

/*
Déjalo caer
Dada la matriz arr, itere y elimine cada elemento comenzando desde el primer elemento (el índice 0) hasta que la función funcregrese truecuando el elemento iterado pase a través de él.

Luego, devuelva el resto de la matriz una vez que se cumpla la condición; de lo contrario, arrdebe devolverse como una matriz vacía.

function dropElements(arr, func) {
    return arr;
}

dropElements([1, 2, 3], function(n) {return n < 3; });

While loop
Array.shift()

*/