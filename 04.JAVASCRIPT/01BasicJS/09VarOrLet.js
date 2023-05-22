let catName = "Oliver";
let catSound = "Meow!";

/*Explore las diferencias entre las palabras clave var y let
Uno de los mayores problemas con la declaración de variables con la varpalabra clave es que puede sobrescribir fácilmente las declaraciones de variables:

var camper = "James";
var camper = "David";
console.log(camper);
En el código anterior, la campervariable se declara originalmente como James, y luego se anula para que sea David. A continuación, la consola muestra la cadena David.

En una aplicación pequeña, es posible que no se encuentre con este tipo de problema. Pero a medida que su base de código se vuelve más grande, puede sobrescribir accidentalmente una variable que no tenía la intención de sobrescribir. Debido a que este comportamiento no arroja un error, la búsqueda y corrección de errores se vuelve más difícil.

letSe introdujo una palabra clave llamada en ES6, una actualización importante de JavaScript, para resolver este posible problema con la varpalabra clave. Aprenderá sobre otras características de ES6 en desafíos posteriores.

Si reemplaza varcon leten el código anterior, se produce un error:

let camper = "James";
let camper = "David";
El error se puede ver en la consola de su navegador.

Entonces var, a diferencia de , cuando usa let, una variable con el mismo nombre solo se puede declarar una vez.

Actualice el código para que solo use la letpalabra clave.*/