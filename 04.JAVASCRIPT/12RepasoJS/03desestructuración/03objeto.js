/*
Desestructuración de Objetos
Primero, veamos por qué es necesaria la desestructuración de objetos.

Digamos que queremos extraer datos de un objeto y asignarlos a nuevas variables.
Antes de ES6 se haría así:

let persona = {
    nombre: "Sarah", 
    pais: "Nigeria", 
    trabajo: "Desarrollador"
};

let nombre = persona.nombre;
let pais = persona.pais;
let trabajo = persona.trabajo;

console.log(nombre); // "Sarah"
console.log(pais); // "Nigeria"
console.log(trabajo); // "Desarrollador"
*/

let persona = {
    nombre: "Sarah", 
    pais: "Nigeria", 
    trabajo: "Desarrollador"
};

let {nombre, pais, trabajo} = persona;

console.log(nombre); // "Sarah"
console.log(pais); // "Nigeria"
console.log(trabajo); // "Desarrollador"

//objeto: sacamos título y el resto aparte en dos variables
const item = {
    id: 0,
    title: 'Hola mundo',
    completed: false,
};
//abrimos llaves para indicar las variables y con igual decimos cómo se llama el objeto de donde salen las propiedades
const {title} = item;
console.log(title); // Hola mundo

//Ahora saco el resto de propiedades en 1 sola
const item2 = {
    id: 0,
    title2: 'Hola mundo',
    completed: false,
};
const {title2, ...resto} = item2;
console.log(title2,resto); //Hola mundo {id: 0, completed: false}

//asignando nuevo nombre
const item3 = {
    id: 0,
    title3: 'Hola mundo',
    completed: false,
};
const {title3: titulo3} = item3;
console.log(titulo3); //Hola mundo

//acceder a objetos dentro de un objeto: usamos otras llaves para acceder al objeto hijo y llamamos a ese hijo
const item4 = {
    id: 0,
    title4: 'Hola mundo',
    completed: {
        situation:false,
    },
};
const {completed:{situation}} = item4;
console.log(situation); //false


/*
También es válido asignar variables a un objeto que no ha sido declarado como antes con persona. Aquí no hace falta usarlo y funciona

let {nombre, pais, trabajo} = {
    nombre: "Sarah", 
    pais: "Nigeria", 
    trabajo: "Desarrollador"
};

console.log(nombre); // "Sarah"
console.log(pais); // "Nigeria"
console.log(trabajo); // "Desarrollador"

*/

/*
Declarando Variables antes de ser asignadas
Las variables en los objetos se pueden declarar antes de asignarlas con desestructuración


let persona2 = {
    nombre: "Sarah", 
    pais: "Nigeria", 
    trabajo: "Desarrollador"
}; 

let nombre2, pais2, trabajo2;

{nombre2, pais2, trabajo2} = persona2;

console.log(nombre2);


nos olvidamos de agregar () antes de las llaves.

Los paréntesis  ( ) alrededor de la asignación es una sintaxis requerida cuando se usa la desestructuración literal de un objeto sin una declaración. Esto se debe a que {} en el lado izquierdo se considera un bloque y no un objeto literal.
Arreglemos el error
*/
let persona3 = {
    nombre: "Sarah", 
    pais: "Nigeria", 
    trabajo: "Desarrollador"
}; 

let nombre3, pais3, trabajo3;

({nombre3, pais3, trabajo3} = persona3);

console.log(nombre3); // "Sarah"
console.log(trabajo3); // "Desarrollador"

/*
Usando un nuevo Nombre de Variable en vez de la propiedad:
Si queremos asignar valores de un objeto a una nueva variable en lugar de usar el nombre de la propiedad
*/

let persona4 = {
    nombre: "Sarah", 
    pais: "Nigeria", 
    trabajo: "Desarrollador"
};

let {nombre: foo, trabajo: bar} = persona4;

console.log(foo); // "Sarah"
console.log(bar); // "Desarrollador"







