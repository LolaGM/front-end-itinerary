function diffArray(arr1, arr2) {
    return arr1
        .concat(arr2) //método concat para unir los dos arrays
        .filter(element => !arr1.includes(element) || !arr2.includes(element));
      //le añadimos método filter para encontrar en el array 1 lo que NO! incluya ese elemento o || en el array2 la diferencia
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5, 6]);
console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5, 6])); //muestra las diferencias entre ambos array

/*
Diferenciar dos matrices
Compare dos matrices y devuelva una nueva matriz con cualquier elemento que solo se encuentre en una de las dos matrices dadas, pero no en ambas. En otras palabras, devuelva la diferencia simétrica de las dos matrices.

Nota: puede devolver la matriz con sus elementos en cualquier orden.

function diffArray(arr1, arr2) {
    const newArr = [];
    return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
*/