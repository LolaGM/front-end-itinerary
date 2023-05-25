function Dog(name) {//constructor function
    this.name = name; //propiedad propia
}

Dog.prototype.numLegs = 4; //propiedad prototipo que va fuera

let beagle = new Dog("Snoopy"); //creamos copia del objeto y le pasamos el valor a la propiedad propia de name a ese constructor 

let ownProps = [];//creamos array vacío con las propiedades propias
let prototypeProps = []; //creamos array vació

for (let property in beagle) { //variable property en el objeto creado beagle que usamos luego 
    if(beagle.hasOwnProperty(property)) {//comprobamos si el objeto beagle tiene la propieadad con hasOwnP
        ownProps.push(property); //añadimos al final del array de propias la propiedad si existe
    } else {//si no que añada al array de tipo
        prototypeProps.push(property);//añadimos al final del array de tipo la propiedad si existe
    }
}

console.log(ownProps);
console.log(prototypeProps);

/*
Iterar sobre todas las propiedades
Ya has visto dos tipos de propiedades: propiedades propias y prototype propiedades. Las propiedades propias se definen directamente en la propia instancia del objeto. Y las propiedades del prototipo se definen en la propiedad de tipo prototype.

function Bird(name) {
  this.name = name;  //own property
}

Bird.prototype.numLegs = 2; // prototype property

let duck = new Bird("Donald");
Así es como agrega duck las propiedades propias a la matriz ownProps y prototype las propiedades a la matriz prototype Props:

Es como si comprobara con el if si la propiedad es propia la añades a un array y si no lo es, lo añades al otro array

let ownProps = [];
let prototypeProps = [];

for (let property in duck) {
    if(duck.hasOwnProperty(property)) {
        ownProps.push(property);
    } else {
        prototypeProps.push(property);
    }
}

console.log(ownProps);
console.log(prototypeProps);
console.log(ownProps)se mostraría ["name"]en la consola y console.log(prototypeProps)se mostraría ["numLegs"].

Agregue todas las propiedades propias de beaglea la matriz ownProps. Agregue todas las prototypepropiedades de Doga la matriz prototypeProps.


function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];


*/