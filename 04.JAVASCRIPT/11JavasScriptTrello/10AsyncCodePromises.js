var promise = new Promise(function(resolve, reject) {
    // do thing, then…

    if (/* everything worked */) {
        resolve("See, it worked!");
    }
    else {
        reject(Error("It broke"));
    }
});

/*uso de THEN*/
Promise.resolve('some')
  .then(function(string) { // <-- This will happen after the above Promise resolves (returning the value 'some')
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            string += 'thing';
            resolve(string);
        }, 1);
        });
    })
  .then(function(string) { // <-- This will happen after the above .then's new Promise resolves
    console.log(string); // <-- Logs 'something' to the console
});

  /*Encadenar promesas */
    var add = function(x, y) {
        return new Promise((resolve,reject) => {
        var sum = x + y;
        if (sum) {
            resolve(sum);
        }
        else {
            reject(Error("Could not add the two values!"));
        }
        });
    };
    
    var subtract = function(x, y) {
        return new Promise((resolve, reject) => {
        var sum = x - y;
        if (sum) {
            resolve(sum);
        }
        else {
            reject(Error("Could not subtract the two values!"));
        }
        });
    };
    
    // Starting promise chain
    add(2,2)
        .then((added) => {
        // added = 4
        return subtract(added, 3);
        })
        .then((subtracted) => {
        // subtracted = 1
        return add(subtracted, 5);
        })
        .then((added) => {
        // added = 6
        return added * 2;    
        })
        .then((result) => {
        // result = 12
        console.log("My result is ", result);
        })
        .catch((err) => {
        // If any part of the chain is rejected, print the error message.
        console.log(err);
        });

/*Generadores de funciones*/

const myFirstGenerator = function* () {
    const one = yield 1;
    const two = yield 2;
    const three = yield 3;

    return 'Finished!';
}

const gen = myFirstGenerator();

/*
¿Qué es una promesa en JavaScript? <<<<<<<<<<<<<<<<<<<<<<<
JavaScript tiene un solo subproceso, lo que significa que no se pueden ejecutar dos bits de secuencia de comandos al mismo tiempo; tienen que correr uno tras otro. Una promesa es un objeto que representa la eventual finalización (o falla) de una operación asíncrona y su valor resultante.

Una Promesa existe en uno de estos estados <<<<<<<<<<<<<<<<<<<
Pendiente: estado inicial, ni cumplida ni rechazada.
Cumplido: operación completada con éxito.
Rechazado: operación fallida.
El objeto Promise funciona como proxy para un valor que no necesariamente se conoce cuando se crea la promesa. Le permite asociar controladores con el valor eventual de éxito o el motivo de falla de una acción asíncrona.

Esto permite que los métodos asíncronos devuelvan valores como los métodos síncronos: en lugar de devolver inmediatamente el valor final, el método asíncrono devuelve la promesa de proporcionar el valor en algún momento en el futuro.

API de promesa <<<<<<<<<<<<<
Hay 4 métodos estáticos en la clase Promise:

Promesa.resolver
Promesa.rechazar
Promise.all
Promesa.carrera

*/