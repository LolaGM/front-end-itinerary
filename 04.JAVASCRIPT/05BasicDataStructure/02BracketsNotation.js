let myArray = ["a", "b", "c", "d"];
// Only change code below this line
myArray[1] = "b e" // añadimos algo al índice 1 además de lo que ya tenía
// Only change code above this line
console.log(myArray);//muestro por pantalla el array completo con el nuevo elemento

/* Acceda al contenido de una matriz usando la notación de paréntesis
La característica fundamental de cualquier estructura de datos es, por supuesto, la capacidad no solo de almacenar datos, sino también de poder recuperar esos datos a pedido. Entonces, ahora que hemos aprendido cómo crear una matriz, comencemos a pensar en cómo podemos acceder a la información de esa matriz.

Cuando definimos una matriz simple como se ve a continuación, hay 3 elementos en ella:

let ourArray = ["a", "b", "c"];
En una matriz, cada elemento de la matriz tiene un índice . Este índice se duplica como la posición de ese elemento en la matriz y cómo se hace referencia a él. Sin embargo, es importante tener en cuenta que las matrices de JavaScript están indexadas a cero , lo que significa que el primer elemento de una matriz está realmente en la posición cero , no en la primera. Para recuperar un elemento de una matriz, podemos encerrar un índice entre paréntesis y agregarlo al final de una matriz, o más comúnmente, a una variable que hace referencia a un objeto de matriz. Esto se conoce como notación de paréntesis . Por ejemplo, si queremos recuperar el afrom ourArrayy asignarlo a una variable, podemos hacerlo con el siguiente código:

let ourVariable = ourArray[0];
Ahora ourVariabletiene el valor de a.

Además de acceder al valor asociado con un índice, también puede establecer un índice en un valor utilizando la misma notación:

ourArray[1] = "not b anymore";
Usando la notación de paréntesis, ahora hemos restablecido el elemento en el índice 1 de la cadena ba not b anymore. Ahora ourArrayes ["a", "not b anymore", "c"]_

let ourArray = ["a", "b", "c"];
let ourVariable = ourArray[0];
console.log(ourArray[0]);
console.log(ourArray[1]);
ourArray[1] = "not b anymore";
console.log(ourArray[1]);

Para completar este desafío, establezca la segunda posición (índice 1) de myArraylo que desee, además de la letra b.

*/