function Cat(name) {
    this.name = name;
}

Cat.prototype = {
    constructor: Cat
};

function Bear(name) {
    this.name = name;
}

Bear.prototype = {
    constructor: Bear
};

function Animal() { };

Animal.prototype = { //supertype que tiene el cómun denominador de eat funcion ¿pero cómo se lo pasamos a los hijos de Animal este prototype?
    constructor: Animal,
    eat: function() {
        console.log("nom nom nom");
    }
};

/*
Usa la herencia para no repetirte
Hay un principio en la programación llamado Don't Repeat Yourself (DRY) . La razón por la que el código repetido es un problema es porque cualquier cambio requiere corregir el código en varios lugares. Esto generalmente significa más trabajo para los programadores y más espacio para errores.

Observe en el siguiente ejemplo que el describemétodo es compartido por Birdy Dog:

Bird.prototype = {
    constructor: Bird,
    describe: function() {
        console.log("My name is " + this.name);
    }
};

Dog.prototype = {
    constructor: Dog,
    describe: function() {
        console.log("My name is " + this.name);
    }
};
El describe método se repite en dos lugares. 
El código se puede editar para seguir el principio DRY creando un supertype(o padre) 
llamado Animal:

function Animal() { };

Animal.prototype = {
    constructor: Animal, 
    describe: function() {
        console.log("My name is " + this.name);
    }
};
Dado que Animalincluye el describemétodo, puede eliminarlo de Birdy Dog:

Bird.prototype = {
    constructor: Bird
};

Dog.prototype = {
    constructor: Dog
};
El eat método se repite en ambos Caty Bear. Edite el código con el espíritu de DRY moviendo el eat método al archivo Animal supertype.

function Cat(name) {
    this.name = name;
}

Cat.prototype = {
    constructor: Cat,
    eat: function() {
        console.log("nom nom nom");
    }
};

function Bear(name) {
  this.name = name;
}

Bear.prototype = {
  constructor: Bear,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Animal() { }

Animal.prototype = {
  constructor: Animal,

};

*/