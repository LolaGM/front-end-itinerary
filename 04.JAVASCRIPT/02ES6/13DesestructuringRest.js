let a;
let b;
let arr; //para que hagamos la desestructura y el REST debemos declarar la variable  arr que contiene el arreglo
[a, b, ...arr] = [1, 2, 3, 4, 5, 6, 7]; // arr de ARRAY con rest ... delante 
console.log(a, b); //mostrará por pantalla 1 2 porque no es un array que lleve corchetes
console.log(arr); //mostrará por pantalla los valores [3,4,5,6,7]
//-------------------------------------------------
function removeFirstTwo(list) {
    const [a, b, ...shorterList] = list; //desestructuramos con variables a, b y rest a shortherList aunque podemos dejar a y b vacío con espacios [ , ,] para cada elemento que queremos obviar
    return shorterList;//retorna la lista acortada con ...rest
}

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sourceWithoutFirstTwo = removeFirstTwo(source); //le pasamos a la función la variable source del renglón anterior
console.log(source); //[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
console.log(sourceWithoutFirstTwo); //[ 3, 4, 5, 6, 7, 8, 9, 10 ]

/*Desestructuración mediante elementos de descanso--------------------------------
En algunas situaciones que involucran la desestructuración de arreglos, es posible que deseemos recopilar el resto de los elementos en un arreglo separado.

El resultado es similar a Array.prototype.slice(), como se muestra a continuación:

const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];
console.log(a, b);
console.log(arr);
La consola mostraría los valores 1, 2y [3, 4, 5, 7].

Variables ay btome el primer y segundo valor de la matriz. Después de eso, debido a la presencia de la sintaxis rest, arrobtiene el resto de los valores en forma de matriz. El elemento resto solo funciona correctamente como última variable de la lista. Como en, no puede usar la sintaxis de descanso para capturar un subarreglo que omite el último elemento del arreglo original.

Use una asignación de desestructuración con la sintaxis rest para emular el comportamiento de Array.prototype.slice(). removeFirstTwo()debe devolver un subarreglo del arreglo original listcon los primeros dos elementos omitidos. */