// Only change code below this line
const increment = (number, value =1 ) => number + value;
// Only change code above this line
console.log(increment(5)); //da 6 como resultado porque por defecto suma 1 a 5
console.log(increment(5,2)); //da 6 como resultado porque le ponemos valor 2 y se suma a 5 dando 7

/* Establecer parámetros predeterminados para sus funciones
Para ayudarnos a crear funciones más flexibles, ES6 introduce parámetros predeterminados para las funciones.Por si se nos olvida pasar algún parámetro a la función creada ya tenemos por defecto el valor indicado dentro con comillas dobles o números

Mira este código:

const greeting = (name = "Anonymous") => "Hello " + name;

console.log(greeting("John"));
console.log(greeting());
La consola mostrará las cadenas Hello Johny Hello Anonymous.

El parámetro predeterminado se activa cuando no se especifica el argumento (no está definido). Como puede ver en el ejemplo anterior, el parámetro namerecibirá su valor predeterminado Anonymouscuando no proporcione un valor para el parámetro. Puede agregar valores predeterminados para tantos parámetros como desee.

Modifique la función incrementagregando parámetros predeterminados para que agregue 1 numbersi valueno se especifica. */