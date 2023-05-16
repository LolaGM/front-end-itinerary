/*Iterar a través de una matriz con un bucle For
Una tarea común en JavaScript es iterar a través del contenido de una matriz. Una forma de hacerlo es con un forbucle. Este código enviará cada elemento de la matriz arra la consola:

const arr = [10, 9, 8, 7, 6];

for (let i = 0; i < arr.length; i++) {
   console.log(arr[i]);
}
Recuerde que las matrices tienen indexación basada en cero, lo que significa que el último índice de la matriz es length - 1. Nuestra condición para este ciclo es i < arr.length, que detiene el ciclo cuando ies igual a length. En este caso, la última iteración es i === 4, por ejemplo, cuando ise vuelve igual arr.length - 1y sale 6a la consola. Luego iaumenta a 5, y el ciclo termina porque i < arr.lengthes false.

Declare e inicialice una variable totalen 0. Use un forciclo para agregar el valor de cada elemento de la myArrmatriz a total.

 */

// Setup
const myArr = [2, 3, 4, 5, 6];// array dado
let total = 0; //variable creada que contendrá el valor que se irá sumando
for (let i = 0; i < myArr.length; i++) { //bucle FOR con las condiciones
   total = total + myArr[i]; //total será igual a la suma progresiva que se le irá añadiendo el valor de myArr
   console.log(myArr[i]); //mostramos por pantalla
}

console.log(total);//mostramos por pantalla el valor final de total que es 20 tras haber ido sumando los elementos de myArr
// Only change code below this line
