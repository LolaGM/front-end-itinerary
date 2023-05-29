class Person { //clase con varios métodos
    constructor(firstAndLast) { //dentro del Objeto Person creamos clase constructor con parámetro first and last
      let fullName = firstAndLast; //nombre y apellidos que guardamos en variable y que luego dividiremos con split en dos elementos 0 name y 1 last name
    
      //vamos ahora con los métodos o funciones para acceder y modificar los valores de ese fullName: getters y setters
      this.getFirstName = function() { //getter del first name
        return fullName.split(" ")[0]; //divide el nombre en espacios y devuelve la primera parte. COn el cero accedemos al primer elemento de esa división
      };
  
      this.getLastName = function() { //getter del last name
        return fullName.split(" ")[1]; //divide el apellido en espacios y devuelve la primera parte accediendo al indice 1 que es el segundo elemento
      };
  
      this.getFullName = function() { //getter del nombre completo
        return fullName;//devuelve el nombre completo sin división ni cambio
      };
  
      this.setFirstName = function(inp) { //setter para modificar el first name con parámetro inp
        let newName = fullName.split(" ");
        newName[0] = inp;
        fullName = newName.join(" ");
      };
  
      this.setLastName = function(inp) { //setter para modificar el last name
        let newName = fullName.split(" ");
        newName[1] = inp;
        fullName = newName.join(" ");
      };
  
      this.setFullName = function(inp) { //setter para modificar el full name
        fullName = inp;
      };
    }
  }

const bob = new Person('Bob Ross'); //nueva instancia de la clase Person llamada bob a la que le pasamos valores
const lol = new Person('lol gar'); //nueva instancia de la clase Person
bob.getFullName(); //muestra el nombre completo
lol.getFullName(); //muestra el nombre completo

/* constructor

const Person = function(firstAndLast) {
  let fullName = firstAndLast;

  this.getFirstName = function() {
    return fullName.split(" ")[0];
  };

  this.getLastName = function() {
    return fullName.split(" ")[1];
  };

  this.getFullName = function() {
    return fullName;
  };

  this.setFirstName = function(name) {
    fullName = name + " " + fullName.split(" ")[1];
  };

  this.setLastName = function(name) {
    fullName = fullName.split(" ")[0] + " " + name;
  };

  this.setFullName = function(name) {
    fullName = name;
  };
};

const bob = new Person("Bob Ross");
console.log(bob.getFullName());
hacer una persona
Complete el constructor de objetos con los siguientes métodos a continuación:

getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)
Ejecute las pruebas para ver el resultado esperado para cada método. Los métodos que toman un argumento deben aceptar solo un argumento y tiene que ser una cadena. Estos métodos deben ser los únicos medios disponibles para interactuar con el objeto.

const Person = function(firstAndLast) {
  this.getFullName = function() {
    return "";
  };
  return firstAndLast;
};

const bob = new Person('Bob Ross');
bob.getFullName();

*/
/*

Hints
Hint 1
Use the this notation to create the keys instead of regular functions: This means instead of var varName = function() {/*...*/} */
/*
 you should use this.varName = function() {/*...*/} 
 
 /*

Hint 2
The program has a test that checks for how many keys you used, they have to be exactly six, the six mentioned in the details section. This means if you need to work with variables, make them local and not a key: this.fullName = firstAndLast;

Hint 3
Often the code would not work the way you expect it due to wrong variable names, make sure to check that you spell them the right way. This happens to all of us at some point.

Hint 4
If you are having problems with writing the setter methods, below is a template for a set method:

this.setFullName = function(input) {

};

*/