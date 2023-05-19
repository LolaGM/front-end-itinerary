let users = {
        Alan: {
        age: 27,
        online: true
        },
        Jeff: {
        age: 32,
        online: true
        },
        Sarah: {
        age: 48,
        online: true
        },
        Ryan: {
        age: 19,
        online: true
        }
};

function isEveryoneHere(userObj) {
// retorna la propiedad de cada parámetro pasado a la función y usamos el && para incluir al resto de pròpiedades
return userObj.hasOwnProperty("Alan") &&
    userObj.hasOwnProperty("Jeff") &&
    userObj.hasOwnProperty("Sarah") &&
    userObj.hasOwnProperty("Ryan");
// Only change code above this line
}

console.log(isEveryoneHere(users));

/*
Comprobar si un objeto tiene una propiedad
Ahora podemos agregar, modificar y eliminar claves de objetos. Pero, ¿y si solo quisiéramos saber si un objeto tiene una propiedad específica? JavaScript nos proporciona dos formas diferentes de hacer esto. Uno usa el hasOwnProperty()método y el otro usa la inpalabra clave. Si tenemos un objeto userscon una propiedad de Alan, podemos verificar su presencia de cualquiera de las siguientes maneras:

users.hasOwnProperty('Alan');
'Alan' in users;
Ambos regresarían true.

Termine de escribir la función para que regrese truesi el objeto que se le pasó contiene los cuatro nombres, Alan, Jeffy Sarahregresa Ryande falselo contrario.

*/