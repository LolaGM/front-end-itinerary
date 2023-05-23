function bouncer(arr) {
    let booleanValues = arr.filter(Boolean); //creamos variable que luego devolvemos y le pasamos al array original el método filter con el filtro de boolean
    return booleanValues; //retorna esa variable creada
}

bouncer([7, "ate", "", false, 9]); //llamamos a la función


/*
Otras soluciones:

function bouncer(arr) {
    const filteredArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) filteredArr.push(arr[i]);
    }
    return filteredArr;
}

<<<<<<<<<Code Explanation<<<<<<<<<<<
We create a new empty array (filteredArr).
We use a for cycle to iterate over all elements of the provided array (arr).
We use the if statement to check if the current element is truthy 309 or falsy 818.
If the element is truthy, we push it to the new array (newArray). This result in the new array (filteredArr) containing only truthy elements.
We return the new array (filteredArr).
---------
function bouncer(arr) {
  return arr.filter(Boolean);
}
<<<<<<<<<<<Code Explanation<<<<<<<<<<<<
The Array.prototype.filter method expects a function that returns a Boolean value which takes a single argument and returns true for truthy 2.9k value or false for falsy 818 value. Hence we pass the built-in Boolean function.

----------------------------------------------------------------
Gorila falso
Elimina todos los valores falsos de una matriz. Devuelve una nueva matriz; no cambie la matriz original.

Los valores falsos en JavaScript son false, null, 0, "", undefined y NaN.

Ejemplo de metodo filter:

var arr = [ 0, 1, '', undefined, false, 2, undefined, null, , 3, NaN ];

var filtered = arr.filter(Boolean);
console.log(filtered); // Resultado: [ 1, 2, 3 ]

Sugerencia: Intente convertir cada valor a un valor booleano.

function bouncer(arr) {
    return arr;
}

bouncer([7, "ate", "", false, 9]);

*/