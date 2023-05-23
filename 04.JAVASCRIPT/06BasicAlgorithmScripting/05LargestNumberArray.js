function largestOfFour(arr) {//función para saber número más grande de un array compuesto por 4 numeros
    const results = []; //creas un array vacío en una constante para guardar el resultado que al final de la función retornas
for (let i = 0; i < arr.length; i++) {//primer for para recorrer el array que contiene todo (el externo)
    let largestNumber = arr[i][0];//variable para guardar el número mayor y la dejamos fuera del segundo for 
    for (let j = 1; j < arr[i].length; j++) {//segundo for que recorre los sub arrays
    if (arr[i][j] > largestNumber) {//comprueba si el elemnto del subarray es más grande que el actual almacenado en variable largestnumber 
        largestNumber = arr[i][j];//si se cumple la condicion, actualiza el número en la variable con las posiciones de los dos for
    }//sino la cumple
    }
    results[i] = largestNumber;//después del for externo, guarda el número mayor con su posición dentro del array resultados
}

return results;//retornas ese array
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

/*
Code Explanation
Create a variable to store the results as an array.
Create an outer loop to iterate through the outer array.
Create a second variable to hold the largest number and initialise it with the first number. This must be outside an inner loop so it won’t be reassigned until we find a larger number.
Create said inner loop to work with the sub-arrays.
Check if the element of the sub array is larger than the currently stored largest number. If so, then update the number in the variable.
After the inner loop, save the largest number in the corresponding position inside of the results array.
And finally return said array.
----------------------------------------------------------------
Devolver los números más grandes en matrices
Devuelve una matriz que consiste en el número más grande de cada subarreglo proporcionado. Para simplificar, la matriz proporcionada contendrá exactamente 4 sub-matrices.

Recuerde, puede iterar a través de una matriz con un bucle for simple y acceder a cada miembro con sintaxis de matriz arr[i].

function largestOfFour(arr) {
    return arr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

*/