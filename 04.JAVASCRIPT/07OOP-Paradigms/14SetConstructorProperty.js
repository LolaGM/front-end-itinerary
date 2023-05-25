function Dog(name) {
  //constructor function Dog con su propiedad
    this.name = name;
}

Dog.prototype = {//creamos objeto con prototype y dentro recordamos al constructor original
    constructor: Dog, //establecemos dentro del objeto nuevo un "recordatorio"del constructor
    numLegs: 4,
    eat: function () {
        console.log("nom nom nom");
    },
    describe: function () {
        console.log("My name is " + this.name);
    },
};

/*
Recuerde establecer la propiedad del constructor al cambiar el prototipo
Hay un efecto secundario crucial de configurar manualmente el prototipo en un nuevo objeto. ¡ Borra la constructor propiedad! Esta propiedad se puede usar para verificar qué función constructora creó la instancia, pero dado que la propiedad se sobrescribió, ahora da resultados falsos:

duck.constructor === Bird;
duck.constructor === Object;
duck instanceof Bird;
En orden, estas expresiones se evaluarían como false, true y true.

Para solucionar esto, siempre que un prototipo se establezca manualmente en un nuevo objeto, recuerde definir la constructor propiedad dentro de ese objeto:(vamos hacer referencia al constructor siempre)

Bird.prototype = {
constructor: Bird,
numLegs: 2,
eat: function() {
    console.log("nom nom nom");
},
describe: function() {
    console.log("My name is " + this.name); 
}
};

Defina la constructor propiedad en el Dog prototype.

function Dog(name) {
this.name = name;
}

Dog.prototype = {
numLegs: 4,
eat: function() {
    console.log("nom nom nom");
},
describe: function() {
    console.log("My name is " + this.name);
}
};

*/
