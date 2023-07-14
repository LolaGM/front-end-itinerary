/*CONST siempre se declara valor y LET no hace falta */
let nombre1;
const nombre2= 'Dolores';
nombre1 = 'María';
console.log(nombre1,nombre2);
//María Dolores

/*CONST con que puedo modificar el contenido*/

const myArray = [1,2,3];
//undefined

//aunque sea una variable CONSTANTE puedo modificar el array que contiene con método por ejemplo push o pop
myArray.push(4);
//4
console.log(myArray);
// (4) [1, 2, 3, 4]

myArray.pop();
console.log(myArray);
// (3) [1, 2, 3]


/*CONST con objeto que puedo modificar el contenido*/
const myObjeto = { nombre: 'John', apellidos: 'Wick'};

console.log(myObjeto);
// {nombre: 'John', apellidos: 'Wick'}

//cambio el valor de la propiedad nombre a Lola
myObjeto.nombre = 'Lola';
console.log(myObjeto);
// {nombre: 'Lola', apellidos: 'Wick'}

//desestructuracion
const { nombre, apellidos } = myObjeto;
console.log(myObjeto);

