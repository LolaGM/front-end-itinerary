const persona = {
  nombre: "Isabel",
  presentarse: function(){//puede escribirse así la función: presentarse(){}
      return `¡Hola! Mi nombre es ${this.nombre} ` //retorna esta plantilla literal y vamos a usar el valor de alguna propiedad como nombre
  } //creamos dentro del objeto una función (sin parámetros) que podremos llamar a través del objeto
}
//this se refiere al objeto PERSONA con el que estamos trabajando y por eso lo usamos para llamar a la propiedad: el nombre de esta persona/el nombre de este objeto
//Esa propiedad se volcará en el objeto actual
persona.presentarse(); //si el valor de una propiedad en un objeto es una función es un METODO
console.log(persona.presentarse()); //muestra por pantalla: ¡Hola! Mi nombre es  Isabel 

// ejercicio freecodecamp
/* const bicycle = {
    gear: 2,
    setGear: function(newGear) {
        this.gear = newGear;
    }
}; */

//se convierte a: elminar la palabra function y los dos puntos:
const bicycle = {
    gear :2,
    setGear(newGear) {
        this.gear = newGear;
    }
};
bicycle.setGear(3); //objeto y llamada a función
console.log(bicycle.gear);//nuestra por pontalla 3 o el valor que pongamos entre paréntesis

/*
Escriba funciones declarativas concisas con ES6
Al definir funciones dentro de objetos en ES5, debemos usar la palabra clave functionde la siguiente manera:

const person = {
  name: "Taylor",
  sayHello: function() {
    return `Hello! My name is ${this.name}.`;
  }
};
Con ES6, puede eliminar la functionpalabra clave y los dos puntos al definir funciones en objetos. He aquí un ejemplo de esta sintaxis:

const person = {
  name: "Taylor",
  sayHello() {
    return `Hello! My name is ${this.name}.`;
  }
};
Refactorice la función setGeardentro del objeto bicyclepara usar la sintaxis abreviada descrita anteriormente.

*/