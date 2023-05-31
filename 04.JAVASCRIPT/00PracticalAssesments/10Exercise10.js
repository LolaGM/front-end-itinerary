/*Ejercicio 10

Crea una función que elimine las etiquetas html o xml de un string.
La función debe tener un string como único parámetro.
Ejemplo de uso de la función:

const result = removeHTMLTags('<div><span>lorem</span> <strong>ipsum</strong></div>');

console.log(result); // lorem ipsum
*/

function removeHTMLTags(string) {
    const regexRemove = /<[^>]+>/g;
    return string.replace(regexRemove, '' );
}

const result = removeHTMLTags('<div><span>lorem</span> <strong>ipsum</strong></div>');
console.log(result);

/*
La solución refactorizada es directamente retornar string pasándole método replace con lo que quieres remover y aplicar espacios vacíos ''

return string.replace(/<[^>]+>/g, '');

*/


