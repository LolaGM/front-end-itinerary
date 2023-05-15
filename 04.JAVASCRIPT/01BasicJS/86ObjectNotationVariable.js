/*Acceso a propiedades de objetos con variables---
Otro uso de la notación de corchetes en objetos es acceder a una propiedad que se almacena como el valor de una variable. Esto puede ser muy útil para iterar a través de las propiedades de un objeto o al acceder a una tabla de búsqueda.

Aquí hay un ejemplo del uso de una variable para acceder a una propiedad:

const dogs = {
    Fido: "Mutt",
    Hunter: "Doberman",
    Snoopie: "Beagle"
};
Guardamos en una variable nueva la propiedad por si luego esa propiedad cambia así acceder al valor actual de esa propiedad:

const myDog = "Hunter";
const myBreed = dogs[myDog];
console.log(myBreed);
La cadena Doberman se mostraría en la consola.

Tenga en cuenta que no usamos comillas alrededor del nombre de la variable cuando lo usamos para acceder a la propiedad porque estamos usando el valor de la variable, no el nombre . */

//Establezca la playerNumbervariable en 16. Luego, use la variable para buscar el nombre del jugador y asígnelo a player.

// Setup
const testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
};
  
  // Only change code below this line
const playerNumber = 16;  // Change this line
const player = testObj[playerNumber];   // Change this line
//hemos accedido al objeto y a la propiedad mediante una variable nueva variable
//esto no se puede hacer con la notación con punto. para acceder al valor de la variable así que se hace con corchete[]