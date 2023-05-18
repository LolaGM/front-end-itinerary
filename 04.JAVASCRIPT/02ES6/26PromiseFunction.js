/**Como su propio nombre indica, una promesa es algo que, en principio pensamos que se cumplirá, Una promesa en JavaScript es exactamente lo que parece: se usa para hacer una promesa de hacer algo, generalmente de forma asíncrona (mientras pides algo al servidor HTTP pides a JS que espere de forma asíncrona)
En el futuro pueden ocurrir varias cosas:
-La promesa se cumple (promesa resuelta) - se obtienen datos de la BBDD
-La promesa no se cumple (promesa se rechaza) - no se obtienen datos de la BBDD
-La promesa se queda en un estado incierto indefinidamente (promesa pendiente) 

Existen dos partes importantes de las promesas: como consumirlas (utilizar promesas) y como crearlas (preparar una función para que use promesas y se puedan consumir).*/
const makeServerRequest  = new Promise((resolve, reject) =>{ 


});

/*
Crear una promesa de JavaScript
Una promesa en JavaScript es exactamente lo que parece: se usa para hacer una promesa de hacer algo, generalmente de forma asíncrona. Cuando la tarea se completa, o cumples tu promesa o no la cumples. Promisees una función constructora, por lo que debe usar la newpalabra clave para crear una. Toma una función, como su argumento, con dos parámetros - resolve y reject. Estos son métodos utilizados para determinar el resultado de la promesa. La sintaxis se ve así:

const myPromise = new Promise((resolve, reject) => {

});
Cree una nueva promesa llamada makeServerRequest. Pase una función con resolvey reject parámetros al constructor.
*/