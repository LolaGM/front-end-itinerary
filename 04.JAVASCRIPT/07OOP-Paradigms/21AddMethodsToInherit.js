function Animal() { } //constructor padre

Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { } //constructor hijo

Dog.prototype = Object.create(Animal.prototype); //el Dog hijo hereda del padre Animal
Dog.prototype.constructor = Dog; //al hijo le pasamos constructor propio

Dog.prototype.bark = function (){ //creamos función que contiene método bark que imprime por pantalla ladrido0
    console.log("Woof!");
}

let beagle = new Dog(); //guardo en beagle una copia instanciada del hijo Dog

/*
Agregar métodos después de la herencia
Una función constructora que hereda su prototypeobjeto de una función constructora de supertipo aún puede tener sus propios métodos además de los métodos heredados.

Por ejemplo, Birdes un constructor que hereda su prototypede Animal:

function Animal() { }
Animal.prototype.eat = function() {
    console.log("nom nom nom");
};
function Bird() { }
Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Bird;
Además de lo que se hereda de Animal, desea agregar un comportamiento que sea exclusivo de Birdlos objetos. Aquí, Birdobtendrá una fly()función. Las funciones se agregan de Bird's prototypela misma manera que cualquier función constructora:

Bird.prototype.fly = function() {
    console.log("I'm flying!");
};
Ahora las instancias de Birdtendrán ambos eat()y fly()métodos:

let duck = new Bird();
duck.eat();
duck.fly();
duck.eat()mostraría la cadena nom nom nomen la consola y duck.fly()mostraría la cadena I'm flying!.

function Animal() { } //constructor padre

Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { } //constructor hijo

let beagle = new Dog(); //guardo en beagle una copia instanciada del hijo Dog
*/