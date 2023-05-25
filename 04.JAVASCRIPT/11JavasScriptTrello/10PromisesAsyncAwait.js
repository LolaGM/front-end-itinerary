//objeto data con 3 objetos dentro

const data = [{
    title: "Aprendiendo JavaScript",
    year: "2021",
    isbn: "979-8700179263",
    author: "Carlos Azaustre"  
  },
  {
    title: "React JS Práctico",
    year: "2022",
    isbn: "TBD",
    author: "Carlos Azaustre"  
  },
  {
    title: "Clean JavaScript",
    year: "2020",
    isbn: "979-8567583319",
    author: "Miguel A. Gómez"  
  }];

//función obtener datos para que retorne este objeto data  function getData(){return data;}

//Sin embargo, si estos datos los tenemos en local o en un fichero,o en una API que tenemos que leer serán recibidos de forma asíncrona y en ese tiempo de recibirlos, habrá un pequeño retraso o DELAY

//para simular ese retardo en lo que devuelva ahora usaremos una función de JS llamada setTimeout. Modificamos la función getData function getData(){return data;}

/*setTimeOut recibe dos parámetros: 
-una función de callback que pondremos en formato arrow function ()=>{} y dentro de la función un console.log(data);
-un número con el tiempo en milisegundos que queremos que se retarde esa función. Por ej 2000 que son 2 seg
-Llamamos ahora a la función que tiene el retardo que veremos que tiene al mostrar los datos si usamos console.log(data);
*/

function getData(){
    return new Promise((resolve,reject) =>{
        if(data === 0){
          reject(new Error("Data is empty"));
        }
    })
      //setTimeout(()=> {
      //console.log(data); sería para mostrar por pantalla
      //return data; 
      // }, 2000);

}

//getData(); //llamamos a la función ahora con el retardo creado pero mejor con console.log
 console.log(getData()); //muestra undefined y esto se resuelve con las promesas >>

/*Esto se resuelve con las >>PROMESAS: un objeto: PROMISE que permite manejar el código asíncrono
Modificamos de nuevo la función GETDATA para que:
-cuando el código este listo lo pueda resolver
-si ha ocurrido algún error lo pueda rechazar
Y así manejar esa función GET DATA en sus dos estados: resuelto y rechazado
>> Retornamos un objeto nuevo Promise que devuelve:
-una función de callback con arrow function nuevamente como  lo hacía el setTimeout
-esta función de callback recibe dos parámetros:
1-objeto resolve que lo usaremos para cuando queramos resolver la promesa
2-objeto reject si hay un error o queremos rechazarlo que es lo que primero escribiremos para que en el caso peor, al usuario le devuelva error o se salga de la función. Comprobamos si data es 0 y rechace con un nuevo ERROR.
-Si sale de ese if es que no hay error y podemos escribir el resolve con el s
*/





