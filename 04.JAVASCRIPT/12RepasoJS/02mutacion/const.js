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

myObjeto.nombre = 'Lola';
console.log(myObjeto);
// {nombre: 'Lola', apellidos: 'Wick'}