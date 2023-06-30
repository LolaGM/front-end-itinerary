/*
The map() method creates a new array with the results of calling a provided function on every element in this array.

Array.prototype.map ( callbackfn [ , thisArg ] )

map crea una nueva array mediante la transformación de cada elemento en una array, de forma individual.
el map se creó para realizar una operación de transformación / cambio en los elementos de una array y al final de estas operaciones para tener una nueva lista con la misma cantidad de elementos que la lista base.

En vez de usar bucle for para recorrer el array usamos el MAP para recorrerlo y obtener resultados
*/

const myArray = [1,2,3];
const newArray = myArray.map(item => item >5);

console.log(newArray);
//(3) [false, false, false]
//los 3 elementos del array no son mayor a 5 por tanto false

const newArrayResult = myArray.map(item => item * 5);
console.log(newArrayResult);
//(3) [5, 10, 15]

var array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]

/*Podemos usar varios métodos juntos: MAP y FILTER: primero los multiplica a cada uno y luego ese array pasa el fitro que le indiquemos devolviendo los que cumplan el criterio*/
const highNumbers = [100,200,300,400,500,600,700,800,900];
const methodHighNumbers = highNumbers.map(n=> n * 10).filter(n => n > 5000);
console.log(methodHighNumbers);
//[  6000,    7000,    8000,    9000]

//con un objeto
const estudiantes = [
    { nombre: 'Quincy', grado: 96 },
    { nombre: 'Jason', grado: 84 },
    { nombre: 'Alexis', grado: 100 },
    { nombre: 'Sam', grado: 65 },
    { nombre: 'Katie', grado: 90 }
];

const bestStudents = estudiantes.map(best => best.grado * 10);
console.log(bestStudents);
//(5) [960, 840, 1000, 650, 900]


