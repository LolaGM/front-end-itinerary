function Animal() { } //principio DRY creando un supertype(o padre) 

Animal.prototype = { //este tendrá la propiedad -->método que tienen en común todos los animales
    constructor: Animal,
    eat: function() {
        console.log("nom nom nom");
    }
};

function Dog() { }; 

Dog.prototype = Object.create(Animal.prototype); //creamos una instancia de Animal en Dog padre -hijo
let beagle = new Dog(); //creamos una variable que contiene una copia del hijo Dog que contendra lo del padre + lo del hijo
beagle.eat();//accedemos por notación a la propiedad que el hijo ha heredado del padre




/*
Establecer el prototipo del niño en una instancia del padre
En el desafío anterior, vio el primer paso para heredar el comportamiento del supertipo (o padre) Animal: crear una nueva instancia de Animal.

Este desafío cubre el siguiente paso: configurar el prototypedel subtipo (o secundario), en este caso, Birdpara que sea una instancia de Animal.

Bird.prototype = Object.create(Animal.prototype);
Recuerda que prototypees como la "receta" para crear un objeto. En cierto modo, la receta por Birdahora incluye todos los "ingredientes" clave de Animal.

let duck = new Bird("Donald");
duck.eat();
duckhereda todas las Animalpropiedades de , incluido el eatmétodo.

Modifique el código para que las instancias de Doghereden de Animal.

function Animal() { }

Animal.prototype = {
    constructor: Animal,
    eat: function() {
        console.log("nom nom nom");
    }
};

function Dog() { }

let beagle = new Dog();
*/