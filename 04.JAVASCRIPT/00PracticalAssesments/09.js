/*Ejercicio 9

Crea una función que a partir de un objeto de entrada, retorne un objeto asegurándose que las claves del objeto estén en lowercase.La función debe tener un objeto como único parámetro.

Ejemplo de uso de la función:
const myObject = { NamE: 'Charles', ADDress: 'Home Street' };
const myObjLowercase = toLowercaseKeys(myObject);
console.log(myObjLowercase); // { name: 'Charles', address: 'Home Street' }

NOTA: en vez de bucle FOR usar REDUCE

*/

function toLowercaseKeys(object) {
    const lowerKey = Object.keys(object).reduce((accum, key) => {
        accum[key.toLowerCase()] = object[key];
        return accum;
    });

    return lowerKey;
}

const myObject = { NamE: 'Charles', ADDress: 'Home Street' };
console.log(toLowercaseKeys(myObject)); //{ name: 'Charles', address: 'Home Street' }


const mySecondObjLowercase = { Age: 24, JoB: 'Teacher' };
console.log(toLowercaseKeys(mySecondObjLowercase)); //{ age: 24, job: 'Teacher' }

/* 

utilizamos el método Object.keys(obj) para obtener un array de las claves del objeto obj. Luego, aplicamos el método reduce en el array resultante para construir un nuevo objeto lowerKey con las claves convertidas a minúsculas y los valores correspondientes.

En cada iteración, la función de reducción toma el acumulador (acc), que es el objeto en construcción, y la clave actual (key) del array. Asignamos al objeto acc una nueva propiedad con la clave en minúsculas y el valor correspondiente utilizando acc[key.toLowerCase()] = object[key].

Finalmente, el objeto lowerKey resultante se devuelve como el resultado de la función objectKeysToLowerCase. Se imprime el resultado utilizando console.log.

Esta es la solución 1 pero en el archivo 09Exercise vemos otra solución.

*/



