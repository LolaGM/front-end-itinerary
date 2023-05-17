




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