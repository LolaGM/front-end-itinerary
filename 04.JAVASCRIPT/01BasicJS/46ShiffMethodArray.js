const myArray = [["John", 23], ["dog", 3]];
let removedFromMyArray = myArray.shift();
console.log(removedFromMyArray); //muestra el primer elemento del array eliminado que se guarda en esta variable
console.log(myArray); //muestra el contenido del array tras haber eliminado el primer elemento

/*
Manipular arreglos con el método de cambio
pop()siempre elimina el último elemento de una matriz. ¿Qué sucede si desea eliminar el primero?

Ahí es donde .shift()entra en juego. Funciona igual que .pop(), excepto que elimina el primer elemento en lugar del último.

Ejemplo:

const ourArray = ["Stimpson", "J", ["cat"]];
const removedFromOurArray = ourArray.shift();
removedFromOurArraytendría un valor de la cadena Stimpsony ourArraytendría ["J", ["cat"]].

Utilice la .shift()función para eliminar el primer elemento myArrayy asignar el valor "desplazado" a una nueva variable, removedFromMyArray.

const myArray = [["John", 23], ["dog", 3]];

*/