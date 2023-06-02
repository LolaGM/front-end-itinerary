/*Ejercicio 11

Crea una función que tome un array como parametro y lo divida en arrays nuevos con tantos elementos como sean especificados.

La función debe tener dos parámetros:

El primer parámetro es el array entero que se quiere dividir.
El segundo parámetro es el número de elementos que deben tener los arrays en los que se divida el array original del primer parámetro.

Ejemplo de uso de la función:

const result = splitArrayIntoChunks([1, 2, 3, 4, 5, 6, 7], 3);
console.log(result); // [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7 ] ]

NOTA: No usar bucle FOR y optar por REDUCE

*/
function splitArrayIntoChunks(array, numElem) {
    return array.reduce((acc, _, index) => {
        if (index % numElem === 0) {
            console.log(acc);
            acc.push(array.slice(index, index + numElem));
        }
        return acc;
        }, []);
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8];
const result = splitArrayIntoChunks(arr, 3);
console.log(result);

splitArrayIntoChunks(["a", "b", "c", "d"], 2); //muestra [ [ 'a', 'b' ], [ 'c', 'd' ] ]
//divide el array en elementos en dos sub arrays

splitArrayIntoChunks(["a", "b", "c", "d"], 3); //muestra [ [ 'a', 'b', 'c' ], [ 'd' ] ]
//divide el array en dos arrays con 3 elementos el primero

splitArrayIntoChunks([1, 2, 3, 4, 5, 6, 7], 3); 
//divide el array en dos arrays con 3 elementos el primero y 3 el segundo

/*

utilizamos el método reduce en el array llamado array.
_ se utiliza simplemente como marcador de posición para el valor actual de cada elemento del array, ya que no se utiliza en la lógica de la función de reducción.

En cada iteración, comprobamos si el índice actual (index) es divisible (con resto cero) por numElem para determinar si es el inicio de un nuevo grupo de elementos.

Si el índice es divisible por numElem dando como resto 0, usamos el método slice para obtener una porción del array desde el índice actual hasta el índice más el número de elementos especificado (index a index + numElem). Luego, esa porción se agrega al acumulador (acc) utilizando el método push.

reduce acumulará los grupos de elementos correctamente en acc, y al finalizar, se devolverá el array resultante con los grupos de elementos

Al finalizar, reduce devuelve el array acumulador completo con los grupos de elementos. Se incluye
[] como valor inicial en el método reduce. Esto asegura que acc sea un array vacío al comenzar el proceso de reducción.

Se almacena el resultado en la variable result y se imprime utilizando console.log.

Otro ejemplo de REDUCE:

const array1 = [1, 2, 3, 4, 5];
const sum = array1.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // Resultado: 15

const array2 = [1, 2, 3, 4, 5];
const substract = array2.reduce((acc, curr) => acc - curr, 0);
console.log(substract); // Resultado: negativo

const array3 = [10, 2];
const multiply = array3.reduce((acc, curr) => acc * curr, 2);
console.log(multiply); // Resultado: 40 porque curr que es 10* el indice 2 es 20 y de nuevo acc que es ahora 20* el elemento 2 es 40. NO usamos indice o inicializador cero para ver claramente que multiplicar por cero da cero

*/