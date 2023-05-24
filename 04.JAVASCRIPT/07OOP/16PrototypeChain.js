function Dog(name) {
    this.name = name;
}

let beagle = new Dog("Snoopy");

Object.prototype.isPrototypeOf(Dog.prototype);  // yields true

/*
Comprender la cadena de prototipos: Todos los objetos en JavaScript (con algunas excepciones) tienen una extensión prototype. Además, un objeto prototype en sí mismo es un objeto.

function Bird(name) {
    this.name = name;
}

typeof Bird.prototype;
Porque un  prototype es un objeto, a prototype puede tener el suyo propio prototype.
En este caso, el prototype de Bird.prototype es Object.prototype:

Object.prototype.isPrototypeOf(Bird.prototype);
¿Cómo es esto útil? Puede recordar el hasOwnProperty método de un desafío anterior:

let duck = new Bird("Donald");
duck.hasOwnProperty("name");
El hasOwnProperty método se define en Object.prototype, al que puede acceder Bird.prototype, al que luego puede acceder duck. Este es un ejemplo de la prototype cadena. En esta prototype cadena, Birdes el supertype for duck, mientras que duck es el subtype. Object es a supertype para ambos Bird y duck. Object es un supertype para todos los objetos en JavaScript. Por lo tanto, cualquier objeto puede usar el hasOwnProperty método.

Modifique el código para mostrar la cadena de prototipo correcta.

function Dog(name) {
    this.name = name;
}

let beagle = new Dog("Snoopy");

Dog.prototype.isPrototypeOf(beagle);  // yields true

*/