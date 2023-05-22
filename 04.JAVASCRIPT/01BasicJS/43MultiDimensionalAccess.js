const myArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14],
];

const myData = myArray[2][1];
console.log(myArray[2][1]);

/*
Acceda a arreglos multidimensionales con índices
Una forma de pensar en una matriz multidimensional es como una matriz de matrices . Cuando usa corchetes para acceder a su matriz, el primer conjunto de corchetes se refiere a las entradas en la matriz más externa (el primer nivel), y cada par adicional de corchetes se refiere al siguiente nivel de entradas en el interior.

Ejemplo

const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14]
];

const subarray = arr[3];
const nestedSubarray = arr[3][0];
const element = arr[3][0][1];
En este ejemplo, subarraytiene el valor [[10, 11, 12], 13, 14], nestedSubarraytiene el valor [10, 11, 12]y elementtiene el valor 11.

Nota: No debe haber espacios entre el nombre de la matriz y los corchetes, como array [0][0]e incluso esto array [0] [0]no está permitido. Aunque JavaScript puede procesar esto correctamente, esto puede confundir a otros programadores al leer su código.

Usando la notación de paréntesis, seleccione un elemento de myArraytal que myDatasea igual a 8.
const myArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14],
];

const myData = myArray[0][0];
*/