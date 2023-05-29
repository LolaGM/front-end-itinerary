function steamrollArray(arr) {
    const flat = [].concat(...arr); // concatenamos una copia del arr al vacío todo esto dentro de flat que luego usamos
    return flat.some(Array.isArray) ? steamrollArray(flat) : flat;
    //retorna ese flat verificando si alguno le pasamos objeto si array lo es con condicional ternario, si no lo es, la función le pasamos flat, si es falso sólo flat que es la copia concatenada
}

steamrollArray([1, [2], [3, [[4]]]]); //muestra [ 1, 2, 3, 4 ]
steamrollArray([1, [2], [[3]], [4]]); //muestra [ 1, 2, 3, 4 ]

/*
Aplanadora
Aplane una matriz anidada. Debe tener en cuenta los diferentes niveles de anidamiento.

function steamrollArray(arr) {
    return arr;
}

steamrollArray([1, [2], [3, [[4]]]]);

Hint 1
You need to check if an element is an array or not.

Hint 2
If you are dealing with an array, then you need flatten it by getting the value inside of the array. This means if you have [[4]] then instead of returning [4] you need to return 4. If you get [[[4]]] then the same, you want the 4. You can access it with arr[index1][index2] to go a level deeper.

Hint 3
You will definitely need recursion or another way to go beyond two level arrays to make the code flexible and not hard-coded to the answers needed. Have fun!

Use spread operator to concatenate each element of arr with an empty array
Use Array.some() method to find out if the new array contains an array still
If it does, use recursion to call steamrollArray again, passing in the new array to repeat the process on the arrays that were deeply nested
If it does not, return the flattened array
*/