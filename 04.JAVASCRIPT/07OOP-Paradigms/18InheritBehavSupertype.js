function Animal() { }

Animal.prototype = {
    constructor: Animal,
    eat: function() {
        console.log("nom nom nom");
    }
};

let duck = Object.create(Animal.prototype); 
let beagle = Object.create(Animal.prototype); 

//Object.create(obj) creates a new object, and sets obj as the new object's prototype.
//Guardamos en variables ese objeto nuevo que ya contiene la propiedad de eat común a todos los animales
//estamos creando copias de Animal

/*
Heredar comportamientos de un supertipo
En el desafío anterior, creaste un supertypellamado Animalque definía los comportamientos compartidos por todos los animales:

function Animal() { }
Animal.prototype.eat = function() {
    console.log("nom nom nom");
};
Este y el próximo desafío cubrirán cómo reutilizar los métodos de Animal adentro Birdy Dogsin definirlos nuevamente. Utiliza una técnica llamada herencia. Este desafío cubre el primer paso: crear una instancia del supertype(o padre). Ya conoce una forma de crear una instancia de Animaluso del newoperador:

let animal = new Animal();
Hay algunas desventajas al usar esta sintaxis para la herencia, que son demasiado complejas para el alcance de este desafío. En cambio, aquí hay un enfoque alternativo sin esas desventajas:

let animal = Object.create(Animal.prototype);
Object.create(obj)crea un nuevo objeto y lo establece objcomo el nuevo objeto prototype. Recuerde que prototypees como la "receta" para crear un objeto. Al configurar el prototypede animalpara que sea el prototypede Animal, le está dando a la animalinstancia la misma "receta" que cualquier otra instancia de Animal.

animal.eat();
animal instanceof Animal;
El instanceofmétodo aquí devolvería true.

Úselo Object.createpara crear dos instancias de Animalnamed ducky beagle.

function Animal() { }

Animal.prototype = {
    constructor: Animal,
    eat: function() {
        console.log("nom nom nom");
    }
};

let duck; // Change this line
let beagle; // Change this line

*/