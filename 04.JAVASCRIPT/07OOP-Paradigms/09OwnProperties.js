function Bird(name,color) { //si aquí añadimos propiedades dentro de Bird la ponemos también como por ejemplo color
    this.name = name;
    this.color = color;
    this.numLegs = 2;
}

let canary = new Bird("Tweety", "red"); //instanciamos en canary una copia de Bird y le nombramos name y su color
let ownProps = []; //creamos array vacío para meter después con push el listado
// Only change code below this line
for (let property in canary){//recorro canary
    if(canary.hasOwnProperty(property)){ //si este objeto canary tiene la prop que le pasamos entonces 
        ownProps.push(property); //a ese array vacío añadimos esa propiedad
    }
}
console.log(ownProps);//muestra por pantalla todas las props que tiene Bird y le hemos pasado como parámetro al contructor Bird
canary instanceof Bird; //devuelve verdadero

/*
Comprender las propiedades propias
En el siguiente ejemplo, el Bird constructor define dos propiedades: name y numLegs:

function Bird(name) {
    this.name = name;
    this.numLegs = 2;
}

let duck = new Bird("Donald");
let canary = new Bird("Tweety"); 

name y numLegs se llaman propiedades propias , porque se definen directamente en el objeto de instancia. Eso significa que duck y canary cada uno tiene su propia copia separada de estas propiedades. De hecho, cada instancia de Bird tendrá su propia copia de estas propiedades. El siguiente código agrega todas las propiedades propias de duck a la matriz ownProps:

let ownProps = [];

for (let property in duck) {
    if(duck.hasOwnProperty(property)) {
        ownProps.push(property);
    }
}

console.log(ownProps);
La consola mostraría el valor ["name", "numLegs"].

Agregue las propiedades propias de canary a la matriz ownProps.

function Bird(name) {
    this.name = name;
    this.numLegs = 2;
}

let canary = new Bird("Tweety");
let ownProps = [];

*/