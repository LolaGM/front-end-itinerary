function Dog(name) {
    this.name = name;
}

Dog.prototype = { //creamos un objeto nuevo con prototype que reúne todas las propiedades que se repiten del objeto construido Dog
// Only change code below this line
    numLegs: 4, 
    eat: function() {
        console.log("nom nom nom");
    },
    describe: function() {
        console.log("My name is " + this.name); //this se refiere al name que tenga el objeto en su constructor que luego le pasamos al crearlo en variable
    }
};

/*
Cambiar el prototipo a un nuevo objeto
Hasta ahora ha estado agregando propiedades a los prototypeindividualmente:

Bird.prototype.numLegs = 2;
Esto se vuelve tedioso después de más de unas pocas propiedades.

Bird.prototype.eat = function() {
    console.log("nom nom nom");
}

Bird.prototype.describe = function() {
    console.log("My name is " + this.name);
}
Una forma más eficiente es establecer el prototypeen un nuevo objeto que ya contiene las propiedades. De esta manera, las propiedades se agregan todas a la vez:

Bird.prototype = {
    numLegs: 2, 
    eat: function() {
        console.log("nom nom nom");
    },
    describe: function() {
        console.log("My name is " + this.name);
    }
};
Agregue la propiedad numLegsy los dos métodos eat()y describe()al prototypede Dogconfigurando el prototypeen un nuevo objeto.

function Dog(name) {
    this.name = name;
}

Dog.prototype = {

};

*/