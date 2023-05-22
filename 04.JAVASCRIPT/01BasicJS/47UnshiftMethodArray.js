const myArray = [["John", 23], ["dog", 3]];
myArray.shift(); //elimina el primer elemento del array

myArray.unshift( ["Paul", 35]);
console.log(myArray); //muestra por pantalla el contenido actualizado del array tras haber insertado en primera posición el elmento con unshift

/*
Manipular arreglos con método unshift
No sólo puede shiftsacar elementos del principio de una matriz, sino que también puede unshiftagregar elementos al principio de una matriz, es decir, agregar elementos delante de la matriz.

.unshift()funciona exactamente igual que .push(), pero en lugar de agregar el elemento al final de la matriz, unshift()agrega el elemento al principio de la matriz.

Ejemplo:

const ourArray = ["Stimpson", "J", "cat"];
ourArray.shift();
ourArray.unshift("Happy");
Después de shift, ourArraytendría el valor ["J", "cat"]. Después de unshift, ourArraytendría el valor ["Happy", "J", "cat"].

Agregue ["Paul", 35]al comienzo de la myArrayvariable usando unshift().

const myArray = [["John", 23], ["dog", 3]];
myArray.shift();

*/