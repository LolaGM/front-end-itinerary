let thisArray = [true, true, undefined, false, null];
let thatArray = [...thisArray]; // usamos ... para copiar el contenido de la variable anterior y hacerlo un array con mismo contenido
console.log(thisArray);//array original
console.log(thatArray); //array copiado con método REST ...que devuelve el mismo contenido

//ejercicio
function copyMachine(arr, num) {
    let newArr = [];
    while (num >= 1) {
      // Only change code below this line
        newArr.push([...arr]);//usamos el método push para añadir al final del newArr lo copiado 
        console.log(newArr);//aquí veremos la primera vez que copia y luego la segunda vez hasta que se para
      // Only change code above this line
      num--; //detiene el bucle: es un freno que resta 1 a num
    }
    return newArr;
}

console.log(copyMachine([true, false, true], 2));

/*Hint 1
The final hint in the example tells you to use a recently learned method.
Hint 2
The spread operator copies all elements into a new empty object.
while (num >= 1) {
    newArr = [...arr]
    num--;
}
The code above will copy all of the elements into newArr but will also reinitialise newArr with every new iteration of the while loop.
A new variable should first be initialised using the spread operator - let obj = [...arr]; - then this variable should be added to the newArr for every iteration of the while loop. */

/*
Copie una matriz con el operador de propagación ...REST
Si bien slice()nos permite ser selectivos sobre qué elementos de una matriz copiar, entre varias otras tareas útiles, el nuevo operador de extensión de ES6 nos permite copiar fácilmente todos los elementos de una matriz, en orden, con una sintaxis simple y fácil de leer. La sintaxis extendida simplemente se ve así:...

En la práctica, podemos usar el operador de propagación para copiar una matriz de esta manera:

let thisArray = [true, true, undefined, false, null];
let thatArray = [...thisArray];
thatArray[true, true, undefined, false, null]es igual thisArraypermanece sin cambios y thatArraycontiene los mismos elementos que thisArray.

Hemos definido una función copyMachineque toma arr(una matriz) y num(un número) como argumentos. Se supone que la función devuelve una nueva matriz formada por numcopias de arr. Hemos hecho la mayor parte del trabajo por usted, pero aún no funciona del todo bien. Modifique la función usando la sintaxis extendida para que funcione correctamente (pista: ¡otro método que ya hemos cubierto podría ser útil aquí!).
*/