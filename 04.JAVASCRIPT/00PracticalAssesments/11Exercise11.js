/*Ejercicio 11

Crea una función que tome un array como parametro y lo divida en arrays nuevos con tantos elementos como sean especificados.

La función debe tener dos parámetros:

El primer parámetro es el array entero que se quiere dividir.
El segundo parámetro es el número de elementos que deben tener los arrays en los que se divida el array original del primer parámetro.

Ejemplo de uso de la función:

const result = splitArrayIntoChunks([1, 2, 3, 4, 5, 6, 7], 3);
console.log(result); // [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7 ] ]

*/

function chunkArrayInGroups(array, numElem) {
    const newArray = [];//declaras un array nuevo vacío que luego retornamos

    //recorres con for el bucle original arr y el incremento que sea i con suma de i más size
    for (let i = 0; i < array.length; i += numElem) {
        console.log(array[i]);//muestro por pantalla 
        newArray.push(array.slice(i, i + numElem)); //slice saca una porción de arr empezando desde el índice actual i hasta el indice más el numero de elementos indicado i+numElem
        //push agrega ese array cortado al actual que al final de la función devolveremos con todas las iteraciones hechas
        console.log(newArray);
    }
    return newArray;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2); //muestra [ [ 'a', 'b' ], [ 'c', 'd' ] ]
//divide el array en elementos en dos sub arrays

chunkArrayInGroups(["a", "b", "c", "d"], 3); //muestra [ [ 'a', 'b', 'c' ], [ 'd' ] ]
//divide el array en dos arrays con 3 elementos el primero

chunkArrayInGroups([1, 2, 3, 4, 5, 6, 7], 3); 
//divide el array en dos arrays con 3 elementos el primero y 3 el segundo