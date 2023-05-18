const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer is set to false to represent an unsuccessful response from a server
    let responseFromServer = false; //la respuesta del servidor es falsa
    
    if(responseFromServer) {
      resolve("We got the data"); //mensaje de éxito
    } else {  
        reject("Data not received");//mensaje de error
    }
});

makeServerRequest.then(result => {
    console.log(result);
});

makeServerRequest.catch(error => { //Agregue el catchmétodo a su promesa + Úselo errorcomo parámetro de su función de devolución de llamada
    console.log(error);// inicie sesión erroren la consola.
});



/*
Manejar una Promesa Rechazada con catch
catches el método utilizado cuando su promesa ha sido rechazada. Se ejecuta inmediatamente después de rejectllamar al método de una promesa. Aquí está la sintaxis:

myPromise.catch(error => {

});
errores el argumento pasado al rejectmétodo.

Agregue el catchmétodo a su promesa. Úselo errorcomo parámetro de su función de devolución de llamada e inicie sesión erroren la consola.
*/