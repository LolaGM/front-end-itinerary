/*Anidamiento de bucles
Si tiene una matriz multidimensional, puede usar la misma lógica que el punto de referencia anterior para recorrer tanto la matriz como las sub-matrices. Aquí hay un ejemplo:

const arr = [
    [1, 2], [3, 4], [5, 6]
    ];

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        console.log(arr[i][j]);
    }
}
Esto da salida a cada subelemento de arr uno en uno. Tenga en cuenta que para el bucle interno, estamos comprobando .lengthof arr[i], ya que arr[i]es en sí mismo una matriz.

Modifique la función multiplyAll para que devuelva el producto de todos los números en los subconjuntos de arr.

*/

//for anidados para acceder a arreglos anidados
//función multiplicar todo con parámetro arr

function multiplyAll(arr) {
    let product = 1; // declaramos la variable con la que multiplicaremos
    // Only change code below this line
    for(let i = 0;i < arr.length; i++){ //con este for accedemos a iterar el array primario que contiene varios arrays
        for( let j = 0; j <arr[i].length;j++){//segundo for para acceder a los arrays internos anidados y por eso indicamos arra[i] y usamos index J
          product = product * arr[i][j];
          //se podría escribir también así --> product*= arr[i][j];
        }
    }
    // Only change code above this line
    return product;
}

multiplyAll([[1, 2], [3, 4], [5, 6, 7]]); //llamo a la función
let product = multiplyAll([[1, 2], [3, 4], [5, 6, 7]]); // indico el valor de la variable actual que ya se ha multimplicado
console.log(product); //muestro por pantalla el valor de la variable

