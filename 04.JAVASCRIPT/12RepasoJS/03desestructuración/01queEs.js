/* 
La sintaxis de desestructuración es una funcionalidad  que vino  con ES6. 
Es una expresión de JavaScript que permite extraer valores de arreglos o propiedades de objetos en distintas variables que queramos.
Es decir, podemos extraer datos de arreglos y objetos y asignarlos a variables.

Podemos sacar uno, varios en el orden deseado.

Imagina que queremos extraer datos de un arreglo. Anteriormente, ¿cómo se haría esto?

let introduccion = ["Hola", "Yo" , "soy", "Sarah"];
let saludo = introduccion[0];
let nombre = introduccion[3];

console.log(saludo); // "Hola"
console.log(nombre); // "Sarah" */


let introduccion = ["Hola", "Yo" , "soy", "Sarah"];;
let [saludo, pronombre] = introduccion;

console.log(saludo); // "Hola"
console.log(pronombre); // "Yo"

//conseguir el mismo resultado:
/* 
let [saludo, pronombre] = ["Hola", "Yo" , "soy", "Sarah"];

console.log(saludo1); // "Hola"
console.log(pronombre1); // "Yo" */

/* Las variables se pueden declarar antes de ser asignadas de esta manera: */

let saludar, sujeto;
[saludar, sujeto] = ["Hola", "Yo" , "soy", "Sarah"];

console.log(saludar); // "Hola"
console.log(sujeto); // "Yo"
//Observa que las variables se establecen de izquierda a derecha. Así que la primera variable obtiene el primer elemento del arreglo, la segunda variable obtiene el segundo elemento, y así sucesivamente.

//¿Qué pasa si queremos obtener el primer y último elemento de nuestro arreglo en lugar del primero y el segundo, y queremos asignar solo dos variables? 

let [saludar0,,,nombre3] = ["Hola", "Yo" , "soy", "Sarah"];

console.log(saludar0); // "Hola"
console.log(nombre3); // "Sarah"

//en lugar de tener solo una coma, tenemos tres. El separador de coma se utiliza para omitir valores en un arreglo. Por lo que, si deseas omitir un elemento en un arreglo, usa comas.

//si queremos omitir todos los elementos, simplemente hacemos esto: let [,,,,] = ["Hola", "Yo" , "soy", "Sarah"];

