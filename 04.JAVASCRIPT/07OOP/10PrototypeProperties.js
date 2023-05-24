function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4; //usamos prototype con el constructor Dog para hacer copias de perro que tengan siempre la propiedad de 4 patas


// Only change code above this line
let beagle = new Dog("Snoopy");


/*
Utilice las propiedades del prototipo para reducir el código duplicado
Dado que numLegsprobablemente tendrá el mismo valor para todas las instancias de Bird, esencialmente tiene una variable duplicada numLegsdentro de cada Birdinstancia.

Esto puede no ser un problema cuando solo hay dos instancias, pero imagínese si hay millones de instancias. Eso sería un montón de variables duplicadas.

Una mejor manera es usar el prototypeof Bird. Las propiedades de prototypese comparten entre TODAS las instancias de Bird. Aquí se explica cómo agregar numLegsa Bird prototype:

Bird.prototype.numLegs = 2;
Ahora todas las instancias de Birdtienen la numLegs propiedad.

console.log(duck.numLegs);
console.log(canary.numLegs);
Dado que todas las instancias tienen automáticamente las propiedades en prototype, piense en a prototypecomo una "receta" para crear objetos. Tenga en cuenta que prototypefor ducky canaryes parte del Birdconstructor como Bird.prototype.

Añadir una numLegs propiedad a la prototype de Dog

function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

*/