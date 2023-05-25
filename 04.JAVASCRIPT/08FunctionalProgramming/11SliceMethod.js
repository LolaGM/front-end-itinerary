function sliceArray(anim, beginSlice, endSlice) {
    // Only change code below this line
    return anim.slice(beginSlice, endSlice); //retorna el array anim con el método slice y a ese le pasas dos variables de la función con números de donde empieza y acaba la copia del array
    // Only change code above this line
}

const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"]; //array ejemplo 1
sliceArray(inputAnim, 1, 3); //llamamos funcion
console.log(inputAnim);

const inputAnim2 = ["Bear", "Lion", "Panther", "Antilope"]; //array ejemplo 2
sliceArray(inputAnim, 2, 3); //llamamos funcion
console.log(inputAnim2);

/*
Devolver parte de una matriz usando el método de división
El slicemétodo devuelve una copia de ciertos elementos de una matriz. Puede tomar dos argumentos, el primero proporciona el índice de dónde comenzar el segmento, el segundo es el índice de dónde finalizar el segmento (y no es inclusivo). Si no se proporcionan los argumentos, el valor predeterminado es comenzar desde el principio de la matriz hasta el final, que es una manera fácil de hacer una copia de toda la matriz. El slicemétodo no muta la matriz original, sino que devuelve una nueva.

Aquí hay un ejemplo:

const arr = ["Cat", "Dog", "Tiger", "Zebra"];
const newArray = arr.slice(1, 3);
newArraytendría el valor ["Dog", "Tiger"].

function sliceArray(anim, beginSlice, endSlice) {

}

const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
sliceArray(inputAnim, 1, 3);

*/