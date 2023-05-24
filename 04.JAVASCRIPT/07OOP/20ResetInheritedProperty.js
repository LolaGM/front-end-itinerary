function Animal() { } // constructor Padre
function Bird() { } // constructor hijo
function Dog() { } // constructor hijo

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

Bird.prototype.constructor = Bird; //el prototype constructor del hijo Bird es Bird
let duck = new Bird(); //guardamos en variable una copia de ese constructor Bird
duck.constructor; // muestra por pantalla el constructor Bird

Dog.prototype.constructor = Dog;
let beagle = new Dog();
beagle.constructor;

/*
Restablecer una propiedad de constructor heredada
Cuando un objeto hereda su propiedad prototype de otro objeto, también hereda la propiedad constructora del supertipo.

Aquí hay un ejemplo:

function Bird() { }
Bird.prototype = Object.create(Animal.prototype);
let duck = new Bird();
duck.constructor

Pero duck y todas las instancias de Bird deben mostrar que fueron construidas por Bird y no Animal. 
Para hacerlo, puede establecer manualmente la propiedad del constructor Birddel Birdobjeto:

Bird.prototype.constructor = Bird;
duck.constructor

Corrija el código duck.constructor y beagle.constructor devuelva sus respectivos constructores.
function Animal() { }
function Bird() { }
function Dog() { }

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

let duck = new Bird();
let beagle = new Dog();

*/