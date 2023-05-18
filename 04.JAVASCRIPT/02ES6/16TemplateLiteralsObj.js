//ejemplo: funcion flecha en una constante para crear OBJETOS ----------------------------------------------------------------
const crearPersona = (nombre, edad, idioma) => {//le pasamos los parámetros que son variables
    return { //devuelve un objeto que creamos con propiedad: valor
        nombre: nombre, // el valor es la variable que contendrá el nombre
        edad: edad,// el valor es la variable que contendrá la edad
        idioma: idioma // el valor es la variable que contendrá el idioma
    };
};
//llamamos a la función mostrando por consola y dentro de ella le pasamos los valores deseados
console.log(crearPersona("Gino Smith", 28, "Español" ));
//forma más concisa de escribir esta función flecha: después de la flecha escribir el objeto rodeado por paréntesis y dentro llaves quitando las llaves de la función y el return
const crearPersona2 = (nombre, edad, idioma) => ({nombre, edad, idioma}); //cambiamos el nombre de la función
console.log(crearPersona2("Gino Smith", 28, "Español" )); // llamamos a la función y pasamos valores

//ejercicio freecodecamp de escribir en una sóla línea la función flecha:
/* const createPerson = (name, age, gender) => {
return {
    name: name,
    age: age,
    gender: gender
};
}; */

const createPerson = (name, age, gender) => ({name, age, gender});

/* Escribir declaraciones literales de objeto concisas utilizando la propiedad de objeto abreviada
ES6 agrega un buen soporte para definir fácilmente los literales de objetos.

Considere el siguiente código:

const getMousePosition = (x, y) => ({
    x: x,
    y: y
});
getMousePositiones una función simple que devuelve un objeto que contiene dos propiedades. ES6 proporciona el azúcar sintáctico para eliminar la redundancia de tener que escribir x: x. Simplemente puede escribir xuna vez y se convertirá en x: x(o algo equivalente) debajo del capó. Aquí está la misma función de arriba reescrita para usar esta nueva sintaxis:

const getMousePosition = (x, y) => ({ x, y });
nameUse la abreviatura de propiedad de objeto con literales de objeto para crear y devolver un objeto con agey genderpropiedades.*/