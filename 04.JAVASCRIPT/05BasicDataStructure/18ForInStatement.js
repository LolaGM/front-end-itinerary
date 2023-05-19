const users = {
    Alan: {
        online: false
        },
        Jeff: {
        online: true
        },
        Sarah: {
        online: false
        }
}

function countOnline(allUsers) {
    // Only change code below this line
    let result = 0;//establecemos variable resultado cero
    for (let user in allUsers) { //
        if (allUsers[user].online === true) { //si cada clave usuario  del objeto con propiedad online es true
        result++; //aumenta el resultado en 1
        }
    }
    return result;
}
/*
Algoritmos de JavaScript y estructuras de datos
Estructuras de datos básicos
Iterar a través de las claves de un objeto con una instrucción for...in
A veces es necesario iterar a través de todas las claves dentro de un objeto. Puede usar un bucle for...in para hacer esto. El bucle for...in se ve así:

const refrigerator = {
    'milk': 1,
    'eggs': 12,
};

for (const food in refrigerator) {
    console.log(food, refrigerator[food]);
}
Este código registra milk 1 y eggs 12, con cada par clave-valor en su propia línea.

Definimos la variable fooden el encabezado del bucle y esta variable se configuró en cada una de las teclas del objeto en cada iteración, lo que resultó en que el nombre de cada alimento se imprimiera en la consola.

NOTA: Los objetos no mantienen un orden en las claves almacenadas como lo hacen las matrices; por lo tanto, la posición de una clave en un objeto, o el orden relativo en el que aparece, es irrelevante al hacer referencia o acceder a esa clave.

Hemos definido una función countOnlineque acepta un argumento, allUsers. Utilice una instrucción for...in dentro de esta función para recorrer el allUsersobjeto y devolver la cantidad de usuarios cuya propiedad en línea está establecida en true. countOnlineA continuación se muestra un ejemplo de un objeto al que se podría pasar . Cada usuario tendrá una onlinepropiedad establecida en trueo false.

{
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}
 */