//se convierte en:
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];  // Hemos añadido dentro del arraý vacío 3 puntos y la constante arr1 para tener lo mismo

console.log(arr2);

/* SPREAD: Use el operador de propagación para evaluar arreglos en el lugar
Coge un arreglo y lo descompone en elementos individuales

ES6 presenta el operador de expansión , que nos permite expandir matrices y otras expresiones en lugares donde se esperan múltiples parámetros o elementos.

El siguiente código ES5 se usa apply()para calcular el valor máximo en una matriz:

var arr = [6, 89, 3, 45];
var maximus = Math.max.apply(null, arr);
maximustendría un valor de 89.

Tuvimos que usar Math.max.apply(null, arr)porque Math.max(arr)regresa NaN. Math.max()espera argumentos separados por comas, pero no una matriz. El operador de propagación hace que esta sintaxis sea mucho mejor para leer y mantener.

const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr);
maximustendría un valor de 89.

...arrdevuelve una matriz desempaquetada. En otras palabras, extiende la matriz. Sin embargo, el operador de propagación solo funciona en el lugar, como en un argumento de una función o en un literal de matriz. El siguiente código no funcionará:

const spreaded = ...arr;
Copie todo el contenido de arr1en otra matriz arr2utilizando el operador de propagación.*/