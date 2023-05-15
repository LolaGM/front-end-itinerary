/*Actualización de propiedades de objetos
Una vez que haya creado un objeto de JavaScript, puede actualizar sus propiedades en cualquier momento, tal como actualizaría cualquier otra variable. Puede usar la notación de puntos o corchetes para actualizar.

Por ejemplo, veamos ourDog:

const ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
};
Ya que es un perro particularmente feliz, cambiemos su nombre a la cadena Happy Camper. Así es como actualizamos la propiedad de nombre de su objeto: ourDog.name = "Happy Camper";o ourDog["name"] = "Happy Camper";Ahora, cuando evaluamos ourDog.name, en lugar de obtener Camper, obtendremos su nuevo nombre, Happy Camper.

Actualice la myDogpropiedad de nombre del objeto. Cambiemos su nombre de Codera Happy Coder. Puede utilizar la notación de puntos o corchetes. */

// Setup
const myDog = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
};

myDog.name ="Happy Coder";
  // Only change code below this line
