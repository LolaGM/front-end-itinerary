/* Iterar con bucles while de JavaScript----------------------------------------------------------------
Puede ejecutar el mismo código varias veces mediante un bucle.

El primer tipo de bucle que aprenderemos se llama bucle while porque se ejecuta mientras una condición específica es verdadera y se detiene una vez que esa condición ya no es verdadera.

const ourArray = [];
let i = 0;

while (i < 5) {
    ourArray.push(i);
    i++;
}
En el ejemplo de código anterior, el while bucle se ejecutará 5 veces 01234 y agregará los números del 0 al 4 a ourArray que estaba vacio

Intentemos hacer funcionar un bucle while insertando valores en una matriz.

Agregue los números del 5 al 0 (inclusive) en orden descendente para myArray usar un while bucle.*/

// Setup
const myArray = []; //array vacío que rellenaremos
let i = 0; //inicializamos el index en cero para que luego se incremente i++
//mientras sea verdadera la condición entre paréntesis se ejecuta, si es falsa NO
while (i <= 5) { //se evalúa la condiciÓn cada vez que se lee el código
    myArray.unshift(i);//usamos el método UNSHIFT para ir agregando valores al arreglo y ponerlos en primer lugar el más reciente
    i++; //incrementamos en 1 el valor de i para que el bucle while se siga leyendo hasta que sea falso
}