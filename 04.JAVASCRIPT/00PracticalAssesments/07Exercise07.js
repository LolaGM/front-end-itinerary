/*Ejercicio 7

Crea una función que retorne los campos de un objeto que equivalgan a un valor “falsy” después de ser ejecutados por una función específica.
La función debe tener dos parámetros:
Primer parámetro es un objeto con x número de campos y valores
Segundo parametro es una funcion que retorne un booleano, que se tiene que aplicar al objeto del primer parámetro

Ejemplo de uso de la función:
const result = returnFalsyValues({ a: 1, b: '2', c: 3 }, x => typeof x === 'string')

console.log(result); // {a: 1, c: 3}

*/

function falsies(object,funct){   

    const falseFields = {};

    for(let key in object){
        if(!funct(object[key])){
            console.log(object[key]);
            falseFields[key] = object[key];
        }
    }

    return falseFields;
}

const result = falsies({ a: 1, b: '2', c: 3 }, x => typeof x === 'string')

console.log(result);
//refactorizado como:
//console.log(falsies({ a: 1, b: '2', c: 3 }, x => typeof x === 'string'));

/*
En nuestra función con dos parámetros creamos un objeto vacío para almacenar los campos falsos.

Con bucle for... in recorremos cada campo del objeto (iteramos sobre las propiedades o claves KEY de ese objeto).

Se verifica si el valor correspondiente al campo actual (o[key]) no cumple con la condición definida por la función f. Para ello, se utiliza la expresión !f(o[key]). Si el valor no cumple con la condición, se ejecuta el bloque de código dentro del if.

Se aplicando la función al valor clave del objeto usando notación de corchetes []

falseFields[key] = o[key] está copiando un campo y su valor del objeto original al objeto falseFields. Esto asegura que el nuevo objeto falseFields tenga los mismos campos y valores que el objeto original, siempre y cuando no cumplan la condición de la función.

Retornamos ese objeto al final de la función con los valores falsos del objeto que le pasemos como parámetro a la función falsies.



*/
