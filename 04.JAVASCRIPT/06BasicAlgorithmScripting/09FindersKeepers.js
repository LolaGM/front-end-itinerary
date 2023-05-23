function findElement(arr, func) {
    let num = 0; //indicamos numero de referencia
    for(let i = 0; i < arr.length; i++) {//recorremos el arr con el for
        num = arr[i];//la variable num será igual al valor array en ese momento
        console.log(num);//numero va aumentando cada vez que se hace el bucle for
        if (func(num)) {
            return num;//si es verdad, devuelve el número
        }     
    }
    return undefined;//si ningún numero pasa el test, devuelve undefined
}

findElement([1, 2, 3, 4], num => num % 2 === 0);

/*
Code Explanation
Challenge asks us to look through array. This is done using a for loop.
The num variable is being passed into the function, so we set it to each index in our array.
The pre-defined function already checks each number for us, so if it is “true”, we return that num.
If none of the numbers in the array pass the function’s test, we return undefined.
----------------------------------------------------------------
Hint 1
We need to return the element from an array that passes a function. Both the function and the array are passed into our function findElement(arr, func). Looking through the array can be done with a for loop.

Hint 2
num is passed to the function. We will need to set it to the elements we want to check with the function.

Hint 3
Do not forget, if none of the numbers in the array pass the test, it should return undefined.
----------------------------------------------------------------
Buscadores Guardianes
Cree una función que mire a través de una matriz arry devuelva el primer elemento que pase una 'prueba de verdad'. Esto significa que dado un elemento x, la 'prueba de verdad' se pasa si func(x)es true. Si ningún elemento pasa la prueba, devuelve undefined.

function findElement(arr, func) {
    let num = 0;
    return num;
}

findElement([1, 2, 3, 4], num => num % 2 === 0);
*/