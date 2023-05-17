var magic = function() {
    return new Date();
  };
//se traduce a borrar lo anterior y escribir:
const magic = () => new Date();
//o si usamos la convención de MAYUSCULAS para las constantes:
const MAGIC = () => new Date();
// después del igual y si la función no tiene cuerpo o solo retorna un objeto como en este caso, sustituimos las llaves por la flecha y detrás el objeto en mayúsculas con sus paréntesis

/*Use funciones de flecha para escribir funciones anónimas concisas---
En JavaScript, a menudo no necesitamos nombrar nuestras funciones, especialmente cuando pasamos una función como argumento a otra función. En su lugar, creamos funciones en línea. No necesitamos nombrar estas funciones porque no las reutilizamos en ningún otro lugar.

Para lograr esto, a menudo usamos la siguiente sintaxis:

const myFunc = function() {
    const myVar = "value";
    return myVar;
}
ES6 nos proporciona el azúcar sintáctico para no tener que escribir funciones anónimas de esta manera. En su lugar, puede usar la sintaxis de la función de flecha :
los paréntesis sustituyen a la palabra FUNCTION
la flecha suele sustituir a las llaves

const myFunc = () => {
    const myVar = "value";
    return myVar;
}
Cuando no hay un cuerpo de función y solo un valor de retorno, la sintaxis de la función de flecha le permite omitir la palabra clave, return así como los corchetes {}que rodean el código. Esto ayuda a simplificar funciones más pequeñas en declaraciones de una sola línea:

const myFunc = () => "value";
Este código aún devolverá la cadena value de forma predeterminada.

Vuelva a escribir la función asignada a la variable magicque devuelve a new Date()para usar la sintaxis de la función de flecha. Además, asegúrese de que no se defina nada con la palabra clave var.
*/