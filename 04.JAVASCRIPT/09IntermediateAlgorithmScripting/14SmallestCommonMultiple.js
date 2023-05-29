function smallestCommons(arr) {
    arr.sort((a, b) => a - b); //ordenar el array ascendente

    for (let i = arr[1] - 1; i > arr[0]; i--) { //recorro array y resto
        arr.splice(1, 0, i); //eliminar del índice 1 cero elementos y añade elmento i
    }

    loop1: for (let i = arr[arr.length - 1]; ; i++) {
        for (let o = 0; o < arr.length; o++) {
        if (!Number.isInteger(i / arr[o])) {
            continue loop1;
        }
        }
        return i;
    }
}

smallestCommons([1,5]);

/*
Mínimo común múltiplo
Encuentre el múltiplo común más pequeño de los parámetros proporcionados que se puede dividir uniformemente por ambos, así como por todos los números secuenciales en el rango entre estos parámetros.

El rango será una matriz de dos números que no necesariamente estarán en orden numérico.

Por ejemplo, si se dan 1 y 3, encuentre el múltiplo común más pequeño de 1 y 3 que también sea divisible por todos los números entre 1 y 3. La respuesta aquí sería 6.

function smallestCommons(arr) {
    return arr;
}

smallestCommons([1,5]);

Hint 1
You can use remainder operator (%) to check if the reminder of a division is 0, which means it is evenly divisible.

Array.sort()
For loop with label
Array.splice()
Number.isInteger()

*/