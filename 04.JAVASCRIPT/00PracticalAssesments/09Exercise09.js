/*Ejercicio 9

Crea una función que a partir de un objeto de entrada, retorne un objeto asegurándose que las claves del objeto estén en lowercase.La función debe tener un objeto como único parámetro.

Ejemplo de uso de la función:
const myObject = { NamE: 'Charles', ADDress: 'Home Street' };
const myObjLowercase = toLowercaseKeys(myObject);
console.log(myObjLowercase); // { name: 'Charles', address: 'Home Street' }

*/

function objectKeysToLowerCase(obj) {
    const lowerKey = {};

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            lowerKey[key.toLowerCase()] = obj[key];
        }
    }

    return lowerKey;;
}

const myObject = { NamE: 'Charles', ADDress: 'Home Street' };
console.log(objectKeysToLowerCase(myObject))
const myObjLowercase = objectKeysToLowerCase(myObject);

/*
En la función recibimos un parámetro que es el objeto

Dentro de la función creamos objeto vacío que contendrá las claves del objeto en minusc

Recorremos ese objeto con for...in la clave del objeto (todas las que haya, sean dos o mil)

Con la condicional if comprobamos que ese objeto tiene la propiedad clave

Si es verdad, coge el objeto y a su clave [con notación de corchetes] le aplicas método de minusculas en cada iteración bucle for.

Ahora esto se va a igualar a la clave del objeto final que sale en la función

Retorna ese objeto

Muestra por pantalla o llama a la función con el parámetro objeto que necesitamos pasar a minúsc

*/



