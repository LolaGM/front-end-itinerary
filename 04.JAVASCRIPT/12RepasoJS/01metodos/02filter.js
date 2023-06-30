/*
The filter() method creates a new array with all elements that pass the test implemented by the provided function.

filter crea una nueva matriz eliminando los elementos que no pertenecen
Array.prototype.filter ( callbackfn [ , thisArg ] )

*/

let words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]

const names = ['Lola', 'Ana','Noa'];
const nameFilter = names.filter(name => name.length >3);
console.log(nameFilter);
// ['Lola']

const numbers = [9,8,7,6,5,4,3,2,1,0];
const numbersFilter = numbers.filter(n => n > 5);
console.log(numbersFilter);
//(4) [9, 8, 7, 6]

//con un objeto
const estudiantes = [
    { nombre: 'Quincy', grado: 96 },
    { nombre: 'Jason', grado: 84 },
    { nombre: 'Alexis', grado: 100 },
    { nombre: 'Sam', grado: 65 },
    { nombre: 'Katie', grado: 90 }
];

const gradosDeEstudiante = estudiantes.filter(estudiante => estudiante.grado >= 90);
console.log(gradosDeEstudiante); 
// [ { nombre: 'Quincy', grado: 96 }, { nombre: 'Alexis', grado: 100 }, { nombre: 'Katie', grado: 90 } ]

const nombreCortoEstudiante = estudiantes.filter(item => item.nombre.length === 3);
console.log(nombreCortoEstudiante);
//[{…}]0:{nombre: 'Sam', grado: 65}

const array2 = ['Lola','Loli', 'Loles'];

const filtered2 = array2.filter(element => element.length === 5);

console.log(filtered2);
//Loles