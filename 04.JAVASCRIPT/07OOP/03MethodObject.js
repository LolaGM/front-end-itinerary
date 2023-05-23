let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function() {return "This dog has " + dog.numLegs + " legs.";}
};

dog.sayLegs();

/*
Crear un método en un objeto
Los objetos pueden tener un tipo especial de propiedad, llamado método .

Los métodos son propiedades que son funciones. Esto agrega un comportamiento diferente a un objeto. Aquí está el duckejemplo con un método:

let duck = {
    name: "Aflac",
    numLegs: 2,
    sayName: function() {return "The name of this duck is " + duck.name + ".";}
};
duck.sayName();
El ejemplo agrega el sayNamemétodo, que es una función que devuelve una oración que da el nombre del duck. Observe que el método accedió a la namepropiedad en la declaración de devolución usando duck.name. El próximo desafío cubrirá otra forma de hacer esto.

Usando el dogobjeto, dale un método llamado sayLegs. El método debe devolver la oración.This dog has 4 legs.

let dog = {
    name: "Spot",
    numLegs: 4,

};

dog.sayLegs();

*/