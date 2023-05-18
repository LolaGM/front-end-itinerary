//creamos una clase que será el patrón de donde sacaremos nuevos objetos
class TransbordadorEspacial { //creamos clase con mayúsculas y luego dentro el contructor
    constructor(planeta){//saber planeta de destino para este transbordador
        this.planeta = planeta;//asignamos una propiedad a este objeto Transbordador: vamos a asignar el valor del parámetro del constructor deñl objeto que estamos creando
    }
}
//creamos un objeto a partir de la clase usando new y entre paréntesis los parámetros que requiera el contructor
let zeus = new TransbordadorEspacial("Jupiter"); //Objeto transbordador con propiedad planeta:Jupiter
console.log(zeus.planeta);//accedemos a la propiedad del objeto 

let apolo = new TransbordadorEspacial("Saturno"); //Objeto transbordador con propiedad planeta:Jupiter
console.log(apolo.planeta);//objeto apolo, propiedad planeta

//otro ejemplo
class Mascota {
    constructor(nombre, edad){//constructor que recibe 2 parámetros nombre y edad 
        this.nombre = nombre; //asigno el valor del nombre a una propiedad con this.nombre
        this.edad = edad;  //asigno el valor de edad a una propiedad con this.edad
    }
};
let miMascota = new Mascota("Laila", 2); //creo un nuevo objeto mascota con dos parámetros
console.log(miMascota); //accede al objeto con todas sus propiedades y los valores que le hemos pasado
console.log(miMascota.nombre);//accedo a la propiedad nombre
console.log(miMascota.edad);//accedo a la propiedad edad
let tuMascota = new Mascota("Rocky", 5); //creo un nuevo objeto mascota con dos parámetros como indica el contructor


// ejercicio freeCodeCamp
class Vegetable{ // creamos el objeto en mayúsculas usando class
    constructor(name){ //hacemos una función con el contructor y le pasamos variable
        this.name = name; //esta variable es igual a la variable que es parámetro del constructor
    }
}
const carrot = new Vegetable('carrot');//creamos una constante que contenga una instancia/copia de la clase creada y le pasamos valor carrot por ejemplo
  console.log(carrot.name); // Should display 'carrot'
  //a la constante la mostramos por pantalla con la propiedad del objeto nombre

/*Use la sintaxis de clase para definir una función constructora
ES6 proporciona una nueva sintaxis para crear objetos, utilizando la palabra clave class .

En ES5, se puede crear un objeto definiendo una constructorfunción y usando la newpalabra clave para instanciar el objeto.

En ES6, una classdeclaración tiene un constructormétodo que se invoca con la newpalabra clave. Si el constructormétodo no está definido explícitamente, entonces está definido implícitamente sin argumentos.

// Explicit constructor
class SpaceShuttle {
  constructor(targetPlanet) {
    this.targetPlanet = targetPlanet;
  }
  takeOff() {
    console.log("To " + this.targetPlanet + "!");
  }
}

// Implicit constructor 
class Rocket {
  launch() {
    console.log("To the moon!");
  }
}

const zeus = new SpaceShuttle('Jupiter');
// prints To Jupiter! in console
zeus.takeOff();

const atlas = new Rocket();
// prints To the moon! in console
atlas.launch();
Cabe señalar que la classpalabra clave declara una nueva función, a la que se agrega un constructor. Este constructor se invoca cuando newse llama para crear un nuevo objeto.

Nota: UpperCamelCase debe usarse por convención para los nombres de clase de ES6, como se SpaceShuttleusó anteriormente.

El constructormétodo es un método especial para crear e inicializar un objeto creado con una clase. Aprenderá más al respecto en la sección de Programación Orientada a Objetos de la Certificación de Estructuras de Datos y Algoritmos de JavaScript.

Use la classpalabra clave y escriba a constructorpara crear la Vegetableclase.

La Vegetableclase le permite crear un objeto vegetal con una propiedad nameque se pasa al constructor.
*/