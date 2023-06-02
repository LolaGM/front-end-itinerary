/*Ejercicio 7

Crea una función que retorne los campos de un objeto que equivalgan a un valor “falsy” después de ser ejecutados por una función específica.
La función debe tener dos parámetros:
Primer parámetro es un objeto con x número de campos y valores
Segundo parametro es una funcion que retorne un booleano, que se tiene que aplicar al objeto del primer parámetro

Ejemplo de uso de la función:
const result = returnFalsyValues({ a: 1, b: '2', c: 3 }, x => typeof x === 'string')

console.log(result); // {a: 1, c: 3}

NOTA: usar métodos FILTER y REDUCE en vez del bucle FOR

*/
function returnFalsyValues(object, funct) {

    const falseFields = Object.entries(object)
        .filter(([key, value]) => !funct(value))
        .reduce((accum, [key, value]) => {
            accum[key] = value;
            return accum;
        });

    return falseFields;
}

const result = returnFalsyValues({ a: 1, b: '2', c: 3 }, x => typeof x === 'string');

console.log(result);

/*
En esta versión, utilizamos Object.entries(object) para obtener un array de pares clave-valor del objeto. 

Luego, aplicamos a este Object el método filter en el array resultante para filtrar los campos que NO ! cumplen la condición especificada por la función funct. 

Finalmente, usamos el método reduce para construir un nuevo objeto falseFields con los campos filtrados.

acc: Este parámetro representa el acumulador, que es el valor acumulado a medida que se recorren los elementos del array. En este caso, acc se utiliza para construir el objeto falseFields que contendrá los campos filtrados. En cada iteración, se asigna el valor correspondiente al campo actual al objeto acc utilizando acc[key] = value.

[key, value]: Este es el elemento actual del array durante la iteración. En cada iteración, [key, value] representa un par clave-valor extraído del objeto original. Por ejemplo, si el objeto original es { a: 1, b: '2', c: 3 }, en la primera iteración [key, value] sería ['a', 1], en la segunda iteración sería ['b', '2'] y en la tercera iteración sería ['c', 3]. Luego, se utiliza esta información para asignar el valor correspondiente al campo actual en el objeto acc.

En resumen, el método reduce se utiliza en este caso para construir un objeto falseFields a partir de los elementos filtrados. Cada campo filtrado se agrega al objeto acc en cada iteración, y al final se devuelve el objeto acc completo como resultado del proceso de reducción.
*/
